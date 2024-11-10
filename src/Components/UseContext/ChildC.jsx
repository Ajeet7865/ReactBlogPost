import React, { useContext } from 'react'
import { UserContext } from './UseContextHook.jsx';
import { ThemeContext } from './UseContextHook.jsx'

const ChildC = () => {

  // Step 3 :  Value Consume
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  function themeChange() {
    if (theme == 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }

  }
  return (
    <div>
      {/* <p> Hello From Child C Value Of Object = {user.name} </p> */}

      <button onClick={themeChange}>
        Change Theme
      </button>

    </div>
  )
}

export default ChildC