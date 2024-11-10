import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);
    const [password, setPassword] = useState("");

    const GeneratePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (number) str += "0123456789";
        if (character) str += "!@#$%^&*(){}<>?/";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, number, character, setPassword]);

    useEffect(() => {
        GeneratePassword();
    }, [length, number, character, setPassword]);

    return (
        <div className="container">
            <h1 className="text-center">Password Generator</h1>
            <div className="row mt-5 bg-dark p-5">
                <div className="col-sm-8">
                    <input type="text" readOnly value={password} className="form-control" />
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-primary" onClick={() => {
                        navigator.clipboard.writeText(password);
                        toast.success("Text Copied..");
                    }}>COPY</button>
                </div>
                <div className='col-sm-8 mt-3 text-white d-flex justify-content-around'>
                    <input type="range" min={5} max={100} value={length} onChange={(e) => setLength(e.target.value)} /> Length ({length})
                    <input type="checkbox" defaultChecked={number} onChange={() => setNumber((prev) => !prev)} /> Number
                    <input type="checkbox" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} /> Characters
                </div>
            </div>

        </div>
    )
}

export default PasswordGenerator