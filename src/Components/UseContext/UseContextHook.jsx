import React, { createContext, useState } from 'react'
import ChildA from './ChildA';
import './useContext.css';


// The useContext hook in React allows you to access the value of a context directly in a functional component.
// It helps avoid passing props down manually at every level of the component tree.
/*  
      Steps Of Use UseContext For Transfer Data 
      ----------------------------------------
       1. Create Context
       2. Provide Context
       3, Consume
    
    */

//Step 1:  Create Context
const UserContext = createContext();
const ThemeContext = createContext();

const UseContextHook = () => {
  const [user, setUser] = useState({ name: "Ajeet Obj" });
  const [theme, setTheme] = useState('light');
  return (
    <>
      {/* Step 2: Wrap all the child inside a provider And Send Value In Props */}
      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>  */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="container" style={{ backgroundColor: theme == 'light' ? 'white' : 'black' }}>
          <ChildA />
        </div>

      </ThemeContext.Provider>

    </>
  )
}

export default UseContextHook
export { UserContext }
export { ThemeContext }