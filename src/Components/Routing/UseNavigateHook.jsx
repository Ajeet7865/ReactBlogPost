import React from 'react'
import { useNavigate } from 'react-router-dom'


// Is Hook Ka use page ko redirect krne ke liye krte hain
export const UseNavigateHook = () => {
    const navigate = useNavigate();
    function goToHome(){
        navigate("/");
    }
  return (
    <>
       <h1>Hello Click On Below Link For Go On Home Page</h1>
       <button className='btn btn-secondary' onClick={goToHome}>
        Go To Home
       </button>
    </>
  )
}
