import React, { useState } from 'react'


// useState is a hook that lets you add state to functional components and trigger re-renders when that state changes.
const UseStateHook = () => {
    const [count, setCount] = useState(0);  // 0 Is Initial Value
    return (
        <div className="counter-container row py-4">
            <div className="col-sm-4">
                <h1 className="text-center">UseState Example</h1>
                <p id="para">You have clicked {count} times </p>
                <button className='btn btn-danger' onClick={() => { setCount(count + 1) }}>Click Me</button>
            </div>
        </div>
    )
}

export default UseStateHook