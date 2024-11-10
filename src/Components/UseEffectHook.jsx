import React, { useEffect, useState } from 'react'


/*  
   what is useEffect
     useEffect hook in React allows you to perform side effects in functional components.
    
   How useEffect Works:
      > By default, useEffect runs after every render (including the first render).
      > You can control when it runs by passing a second argument: an array of dependencies. If you provide an empty array ([]), it runs only once when the component mounts.
      > It can also clean up after itself, like removing event listeners or cancelling network requests.

      This allows you to handle side effects like data fetching, subscriptions, and more, while keeping your component's logic clean.

      
*/

const UseEffectHook = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    // Variation 1:  Runs On Every Render (Yeh Component Ke render hone se pehle Run Karta Hai)
    //   useEffect(() => {
    //     alert("Runs Every Render");
    //   })

    // Variation 2: Runs Only First Render
    //  useEffect(() => {
    //    alert("Runs Only First Time");
    //  }, [])

    // Variation 3 : Isme Jub Bhi Count ke value update hogi tb run hoga
    // useEffect(() => {
    //   alert("Count is Updated");
    // }, [count])


    // Variation 4: Multiple Dependencies Isme Array Mai jo bhi variable denge jab woh update hoga toh yeh run hoga
    // useEffect(() => {
    //    alert("Count Or Total is updated");
    // }, [count,total])


    // Variation 5: Isme Cleanup Function Bhi Add Karenge
    useEffect(() => {
        console.log("Count is updated with cleanup");  // second yeh run hoga
        return () => {  
            console.log("Count is unmounted");  // Sabse pehle yeh run hoga count ki value ko clear krega 
        }
    }, [count])



    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>Update Count</button>
            Count Value : {count}

            <br />
            <button onClick={() => { setTotal(total + 1) }}>Update Total</button>
            Count Value : {total}

            <br /><br />
            <h4>Time Example Using UseEffect</h4>
        </>
    )
}

export default UseEffectHook