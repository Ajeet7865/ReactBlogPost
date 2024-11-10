import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  // console.log(import.meta.env.VITE_APPWRITE_URL); // .env file ko react krne ke liye
  
  return (
    <div>
      This is Home Component
      <Outlet />

    </div>
  )
}

export default Home