import React from 'react'
import useTheme from './theme';

const ThemeBtn = () => {
    const { themeMode, darkTheme, lightTheme } = useTheme();

    const changeTheme = (e) => {
        const currentStatus = e.currentTarget.checked;
        if (currentStatus) {
            darkTheme();
        } else {
            lightTheme();
        }

    }


    return (
        <div>
            <input type="checkbox" onChange={changeTheme} /> Toggle Theme
        </div>
    )
}

export default ThemeBtn