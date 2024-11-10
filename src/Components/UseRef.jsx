import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const focusInput = () => {
        inputElement.current.focus();
    }

    return (
        <>
            <div className="container">
                <h4 className="text-center">UseRef</h4>
                <pre>
                    The useRef Hook allows you to persist values between renders.
                    <br />
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    <br />
                    It can be used to access a DOM element directly.
                </pre>

                <br />
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <h1>Render Count: {count.current}</h1>

                <br />
                <h4>UseRef Using in DOM Manipulation</h4>
                <input type="text" ref={inputElement} />
                <button onClick={focusInput}>Focus Input</button>
            </div>

        </>
    )
}

export default UseRef