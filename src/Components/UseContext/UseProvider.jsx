import React from 'react'
import UserContextProvider from './UserContextProvider'
import Login from './Login'
import Profile from './Profile'

const UseProvider = () => {
    return (
        <UserContextProvider>
            <h1>Coming From User Provider From UserContext Provide Context API</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    )
}

export default UseProvider