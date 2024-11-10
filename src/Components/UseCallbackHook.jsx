import React, { memo, useState, useCallback } from 'react'

{/*       
    <h4>UseCallback</h4>
    <p>
        The useCallback hook in React is used to memoize functions, preventing them from being recreated on every render. This is particularly useful in scenarios where a component passes a callback function to a child component. If the parent component re-renders, it might create a new instance of the callback function, causing the child component to re-render unnecessarily. Using useCallback helps optimize this behavior.

        Note* - Jab bhi hum increment button par click krte hain toh child component re-render hota hai isi ko bachane ke liye React.Memo ka use krte hain
    </p> 
*/}

const ChildComponent = React.memo((props) => {
    console.log('child component re-renderd')
    return (
        <button onClick={props.handleClick}>
            {props.name}
        </button>

    )
})

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);



    const handleClick = useCallback(() => {
        console.log('Call Back');
        setCount(count + 1);
    }, [count]);  // Agar Count ki value change hogi tbhi function re-create hoga re-render par


    return (
        <div className='container'>
            <h4>UseCallback Example</h4>
            <p>
                Count : {count}
            </p>
            <button onClick={handleClick}>Increment</button>
            <br />
            <ChildComponent
                name="Click Child"
                handleClick={handleClick}
            />

        </div>
    )
}

export default UseCallbackHook