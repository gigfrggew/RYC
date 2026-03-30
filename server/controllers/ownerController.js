import imagekit from "../config/imageKit.js";
import User from "../models/User.js";
import Car from "../models/Car.js"
import fs from "fs";
import Booking from "../models/Booking.js";
//API To Chnage Role of User
export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: "Now you can List Car" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}


//API to List Car

export const addCar = async (req, res) => {
    try {
        const { _id } = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        //optimization through imagekit URL transformation
        var optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: '1280' },//width resizing
                { quallity: 'auto' }, //Auto compression
                { format: 'webp' } //Convert to modern format
            ]
        })

        const image = optimizedImageUrl;

        await Car.create({ ...car, owner: _id, image })
        res.json({
            success: true,
            message: "Car added successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


//API To List Owner Car
export const getOwnerCars = async (req, res) => {
    try {
        const { _id } = req.user;
        const cars = await Car.find({ owner: _id })
        res.json({ success: true, cars })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


//API To Toggle Car Availability
export const toggleCarAvailability = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId)

        //checking if car belongs to user
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" })
        }

        car.isAvailable = !car.isAvailable;
        await car.save();

        res.json({ success: true, message: "Availablity Toggled" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

//API To Delete a Car
export const deleteCar = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId)

        //checking if car belongs to user
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" })
        }

        car.owner = null
        car.isAvailable = false;

        await car.save();

        res.json({ success: true, message: "Car Removed" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


//API To Get DashBoard Data
export const getDahboardData = async (req, res) => {
    try {
        const { _id, role } = req.user;
        if (role !== 'owner') {
            return res.json({ success: false, message: "Unauthorized" })
        }

        const cars = await Car.find({ owner: _id })
        const bookings = await Booking.find({ owner: _id })
            .populate('car')
            .sort({ createdAt: -1 });

        const validBookings = bookings.filter(b => b.car !== null);

        const pendingBookings = await Booking.find({ owner: _id, status: "pending" })
        const completedBookings = await Booking.find({ owner: _id, status: "confirmed" })


        //calculate monthlyRevenue from bookings where status is confirmed
        const monthlyRevenue = bookings.slice().filter(booking => booking.status === 'confirmed')
            .reduce((acc, booking) => acc + booking.price, 0)

        const dashboardData = {
            totalCars: cars.length,
            totalBookings: validBookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0, 3),
            monthlyRevenue
        }

        res.json({ success: true, dashboardData });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}


//API  To update user image

export const updateUserImage = async (req, res) => {
    try {
        const { _id } = req.user

        const imageFile = req.file;

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/users'
        })

        //optimization through imagekit URL transformation
        var optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { width: '400' },//width resizing
                { quallity: 'auto' }, //Auto compression
                { format: 'webp' } //Convert to modern format
            ]
        })

        const image = optimizedImageUrl;

        await User.findByIdAndUpdate(_id, { image });
        res.json({ success: true, message: "Image Updated" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}