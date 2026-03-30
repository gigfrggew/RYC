import React, { useState } from "react"
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import MyBookings from "./Pages/MyBookings";
import CarDetails from "./Pages/CarDetails";
import Cars from "./Pages/Cars";
import Footer from "./Components/Footer";
import ManageCars from "./Pages/owner/ManageCars";
import ManageBookings from "./Pages/owner/ManageBookings";
import AddCar from "./Pages/owner/AddCar";
import Dashboard from "./Pages/owner/Dashboard";
import Layout from "./Pages/owner/Layout";
import Login from "./Components/Login";
import {Toaster} from "react-hot-toast"
import { useAppContext } from "./context/AppContext";

function App() {
  const {showLogin}=useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    <Toaster />
      {showLogin && <Login />}
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}

    </>
  )
}

export default App;