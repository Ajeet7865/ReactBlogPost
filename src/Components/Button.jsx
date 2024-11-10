import React from 'react'

const Button = (props) => {
    return (
        <button className='btn btn-primary' onClick={props.incrementCount}>Click Submit</button>
    )
}

export default Button