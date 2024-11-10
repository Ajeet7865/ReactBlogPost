import { createContext, useContext } from "react";

export const ThemeContext = createContext({  // Initial Value Bhi De Sakte Hain Optional hai
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }


});

export const ThemeProvider = ThemeContext.Provider;


export default function useTheme () {  // Jese Hi useTheme Ko Use Karenge Woh Apne Aap ThemeContext ka Data De Dega
    return useContext(ThemeContext);
}