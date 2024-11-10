import React, { useState } from 'react'
import Button from './Button';

const Card = (props) => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="card" style={{ width: '12rem', margin: '10px' }}>
            <img src={props.src} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title} {count}</h5>
                <p className="card-text">{props.description.toUpperCase()}</p>
                {props.children}
                <Button incrementCount={handleClick} />
            </div>
        </div>
    )
}

export default Card;