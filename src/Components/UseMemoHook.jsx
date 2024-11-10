import React, { useState, useMemo } from 'react'



const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    const ExpensiveCalculation = ({ count }) => {
        console.log('Running expensive calculation...');
        for (let i = 0; i < 1000000000; i++) {    }
        return  Number(input) + 4;
    };
    
    const expensiveResult = useMemo(() => ExpensiveCalculation({ input }), [input]);  // Jab Bhi Input Ki Value Change Hogi Toh Yeh Function Chalega 

    return (
        <>
            <h4>UseMemo Hook</h4>
            <p>
                The useMemo hook in React is used to optimize performance by memoizing the result of a computation. It only recomputes the memoized value when one of its dependencies changes. This can prevent expensive calculations from being run on every render and is particularly useful when rendering large lists or performing complex calculations.
                <br />
                Key Points:  <br />
                -- useMemo: Memoizes the result of a function and only recalculates if one of the dependencies (a, b, etc.) changes. <br />
                -- It does not memoize functions themselves, but the result of functions. <br />
                -- Useful for performance optimization to avoid unnecessary recalculations. <br />
            </p>
            <br /><br />
            <div className='container'>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
                <br />
                <br />
                <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            
            <div>
                <h2>Expensive Calculation Result: {expensiveResult}</h2>
            </div>

        </>
    )
}

export default UseMemoHook