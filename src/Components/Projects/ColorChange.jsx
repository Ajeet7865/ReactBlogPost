import React, { useState } from 'react'
import TailwindNavbar from './TailwindNavbar';

const ColorChange = () => {
    const [color, setColor] = useState("magenta");

    return (
        <>
            <div className="d-flex justify-content-around align-items-end p-4">
                <button className='btn' onClick={() => setColor("Red")} style={{ backgroundColor: 'Red' }}>Red</button>
                <button className='btn' onClick={() => setColor("Green")} style={{ backgroundColor: 'Green', color: 'white' }}>Green</button>
                <button className='btn' onClick={() => setColor("Pink")} style={{ backgroundColor: 'Pink' }}>Pink</button>
                <button className='btn' onClick={() => setColor("Yellow")} style={{ backgroundColor: 'Yellow' }}>Yellow</button>
                <button className='btn' onClick={() => setColor("Grey")} style={{ backgroundColor: 'Grey' }}>Grey</button>
                <button className='btn' onClick={() => setColor("Violet")} style={{ backgroundColor: 'Violet' }}>Violet</button>
                <button className='btn' onClick={() => setColor("Brown")} style={{ backgroundColor: 'Brown' }}>Brown</button>
                <button className='btn' onClick={() => setColor("Black")} style={{ backgroundColor: 'Black', color: 'white' }}>Black</button>
                <button className='btn' onClick={() => setColor("Blue")} style={{ backgroundColor: 'Blue' }}>Blue</button>

            </div>
            <div style={{ height: "70vh", width: "100%", border: "1px solid black", backgroundColor: color }}></div>
        </>

    )
}

export default ColorChange