
import logo1 from "./logo1.png";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import search_icon1 from "./search_icon1.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import addIcon from "./addIcon.svg"
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import avatar from "./avatar.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import calendar_icon from "./calendar_icon.svg"
// import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image1 from "./testimonial_image1.png"
import testimonial_image2 from "./testimonial_image2.png"
import testimonial_image3 from "./testimonial_image3.png"
import main_car2 from "./main_car2.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png";

export const cityList = ['New York', 'Los Angeles', 'Houston', 'Chicago']

export const assets = {
  logo1,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  search_icon1,
  close_icon,
  users_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon,
  //   location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
  filter_icon,
  testimonial_image1,
  testimonial_image2,
  testimonial_image3,

  main_car2,
  banner_car_image,
  avatar,
  //   car_image1,
    upload_icon,
  user_profile,
  car_image1,
  car_image2,
  car_image3,
  car_image4
}

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
  { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
  { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
  { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
  { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]



export const dummyDashboardData = [
  {
    totalCars: 12,
    totalBookings: 45,
    pendingBookings: 5,
    completedBookings: 38,
    recentBookings: [
      {
        id: "B001",
        car: {
          brand: "Hyundai",
          model: "Creta"
        },
        user: "Rahul Sharma",
        status: "completed",
        createdAt: "2026-03-20T10:30:00.000Z",
        price: 2500
      },
      {
        id: "B002",
        car: {
          brand: "Kia",
          model: "Seltos"
        },
        user: "Anjali Verma",
        status: "pending",
        createdAt: "2026-03-22T14:15:00.000Z",
        price: 3200
      },
      {
        id: "B003",
        car: {
          brand: "Toyota",
          model: "Fortuner"
        },
        user: "Amit Kumar",
        status: "completed",
        createdAt: "2026-03-18T09:00:00.000Z",
        price: 5000
      }
    ],
    monthlyRevenue: 125000
  },

  {
    totalCars: 18,
    totalBookings: 72,
    pendingBookings: 10,
    completedBookings: 62,
    recentBookings: [
      {
        id: "B004",
        car: {
          brand: "Mahindra",
          model: "Thar"
        },
        user: "Sneha Reddy",
        status: "completed",
        createdAt: "2026-03-19T11:45:00.000Z",
        price: 4500
      },
      {
        id: "B005",
        car: {
          brand: "Honda",
          model: "City"
        },
        user: "Vikram Singh",
        status: "pending",
        createdAt: "2026-03-23T16:20:00.000Z",
        price: 2800
      },
      {
        id: "B006",
        car: {
          brand: "Maruti",
          model: "Swift"
        },
        user: "Pooja Nair",
        status: "completed",
        createdAt: "2026-03-17T08:30:00.000Z",
        price: 1800
      }
    ],
    monthlyRevenue: 182000
  },

  {
    totalCars: 9,
    totalBookings: 28,
    pendingBookings: 4,
    completedBookings: 24,
    recentBookings: [
      {
        id: "B007",
        car: {
          brand: "Tata",
          model: "Nexon"
        },
        user: "Arjun Patel",
        status: "completed",
        createdAt: "2026-03-21T12:10:00.000Z",
        price: 3000
      },
      {
        id: "B008",
        car: {
          brand: "Renault",
          model: "Kwid"
        },
        user: "Meera Iyer",
        status: "pending",
        createdAt: "2026-03-24T10:00:00.000Z",
        price: 1500
      },
      {
        id: "B009",
        car: {
          brand: "Skoda",
          model: "Slavia"
        },
        user: "Karan Mehta",
        status: "completed",
        createdAt: "2026-03-16T07:50:00.000Z",
        price: 3500
      }
    ],
    monthlyRevenue: 74000
  }
];





export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Jhon",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
  {
    "_id": "67ff5bc069c03d4e45f30b77",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "BMW",
    "model": "X5",
    "image": car_image1,
    "year": 2006,
    "category": "SUV",
    "seating_capacity": 4,
    "fuel_type": "Hybrid",
    "transmission": "Semi-Automatic",
    "pricePerDay": 300,
    "location": "New York",
    "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
    "isAvailable": true,
    "createdAt": "2025-04-16T07:26:56.215Z",
  },
  {
    "_id": "67ff6b758f1b3684286a2a65",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "Toyota",
    "model": "Corolla",
    "image": car_image2,
    "year": 2021,
    "category": "Sedan",
    "seating_capacity": 4,
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "pricePerDay": 130,
    "location": "Chicago",
    "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    "isAvailable": true,
    "createdAt": "2025-04-16T08:33:57.993Z",
  },

  {
    "_id": "67ff6b9f8f1b3684286a2a68",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "Jeep",
    "model": "Wrangler",
    "image": car_image3,
    "year": 2023,
    "category": "SUV",
    "seating_capacity": 4,
    "fuel_type": "Hybrid",
    "transmission": "Automatic",
    "pricePerDay": 200,
    "location": "Los Angeles",
    "description": "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
    "isAvailable": true,
    "createdAt": "2025-04-16T08:34:39.592Z",
  },

  {
    "_id": "68009c93a3f5fc6338ea7e34",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "brand": "Ford",
    "model": "Neo 6",
    "image": car_image4,
    "year": 2022,
    "category": "Sedan",
    "seating_capacity": 2,
    "fuel_type": "Diesel",
    "transmission": "Semi-Automatic",
    "pricePerDay": 209,
    "location": "Houston",
    "description": "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
    "isAvailable": true,
    "createdAt": "2025-04-17T06:15:47.318Z",
  }
];

export const dummyMyBookingsData = [
  {
    "_id": "68482bcc98eb9722b7751f70",
    "car": dummyCarData[0],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "6847f7cab3d8daecdb517095",
    "pickupDate": "2025-06-13T00:00:00.000Z",
    "returnDate": "2025-06-14T00:00:00.000Z",
    "status": "confirmed",
    "price": 440,
    "createdAt": "2025-06-10T12:57:48.244Z",
  },
  {
    "_id": "68482bb598eb9722b7751f60",
    "car": dummyCarData[1],
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-12T00:00:00.000Z",
    "returnDate": "2025-06-12T00:00:00.000Z",
    "status": "pending",
    "price": 130,
    "createdAt": "2025-06-10T12:57:25.613Z",
  },
  {
    "_id": "68482bb598eb9722b7751f61",
    "car": dummyCarData[2],
    "user": "6847f7cab3d8daecdb517096",
    "owner": "67fe3467ed8a8fe17d0ba6e3",
    "pickupDate": "2025-06-15T00:00:00.000Z",
    "returnDate": "2025-06-18T00:00:00.000Z",
    "status": "confirmed",
    "price": 210,
    "createdAt": "2025-06-11T10:20:30.500Z"
  },
  {
    "_id": "68482bb598eb9722b7751f62",
    "car": dummyCarData[3],
    "user": "6847f7cab3d8daecdb517097",
    "owner": "67fe3467ed8a8fe17d0ba6e4",
    "pickupDate": "2025-06-20T00:00:00.000Z",
    "returnDate": "2025-06-22T00:00:00.000Z",
    "status": "cancelled",
    "price": 95,
    "createdAt": "2025-06-12T08:45:10.200Z"
  }
];