import React, { useEffect, useState } from 'react'

const UseEffectHookTimer = () => {
    const [Second, setSecond] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(preveSecond => preveSecond + 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        } 
    }, [])


    return (
        <>
            <h1>Seconds : {Second}</h1>
        </>

    )
}

export default UseEffectHookTimer