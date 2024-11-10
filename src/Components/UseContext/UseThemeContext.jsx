import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './theme'
import ThemeBtn from './ThemeBtn';

const UseThemeContext = () => {
    const [themeMode, setTheme] = useState('light');

    const lightTheme = () => {
        setTheme('light');
    }
    const darkTheme = () => {
        setTheme('dark');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("dark", "light");
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);

    return (
        <>
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <div className="container mt-5">

                    <div className="row">
                        <div className="col-sm-3 text-right">
                            <ThemeBtn />
                        </div>
                    </div>

                    <div className={themeMode == "dark" ? "card bg-dark text-white" : "card"} style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default UseThemeContext