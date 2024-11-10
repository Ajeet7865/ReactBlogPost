import React, { useContext } from 'react'
import UserContext from './UserContext'


const Profile = () => {

    const { user } = useContext(UserContext);
    console.log(user)
    if(!user) return <div>Please Login First</div>
    return (
        <div>UserName : {user}</div>
    )
}

export default Profile