import React, { useState } from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const ConditionalRendering = () => {
    const [isLogin, setLogin] = useState(true);

    // Using IF Else
    // if (isLogin) {
    //     return (
    //         <LogoutButton />
    //     )
    // }
    // else {
    //     return (
    //         <LoginButton />
    //     )
    // }

    // Conditional Operator
    // return (
    //     <>
    //         {isLogin ? <LogoutButton /> : <LoginButton />}
    //     </>
    // )

    // Logical Operator
    return(
     <>
        {isLogin && <LogoutButton/> }
     </>

    )


}

export default ConditionalRendering