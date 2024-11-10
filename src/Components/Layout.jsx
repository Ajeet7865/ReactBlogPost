import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

// Layout Page ki routing ke jo bhi children honge woh Outlet ke andar Render Hote hain

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout