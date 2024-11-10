import React from 'react'
import { Link, NavLink } from 'react-router-dom'


// Link Ki Jagah NavLink Ka Use Kr Sakte Hain Isme Hum Active Ki Functionality Bhi laga Sakte hain

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className={({ isActive }) => isActive ? "navbar-brand active" : "navbar-brand"} to="/">Home</NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/card">Card List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/gallery">Gallery</NavLink>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="reactHooksDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              React Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="reactHooksDropdown">
              <NavLink className="dropdown-item" to="/usestatehook">UseState</NavLink>
              <NavLink className="dropdown-item" to="/userefhook">UseRef</NavLink>
              <NavLink className="dropdown-item" to="/statelifting">State Lifting</NavLink>
              <NavLink className="dropdown-item" to="/useparams">Use Params</NavLink>
              <NavLink className="dropdown-item" to="/usenavigate">UseNavigate</NavLink>
              <NavLink className="dropdown-item" to="/usememohook">UseMemo</NavLink>
              <NavLink className="dropdown-item" to="/usecallback">UseCallback</NavLink>
              <NavLink className="dropdown-item" to="/usecontexthook">UseContext</NavLink>
              <NavLink className="dropdown-item" to="/useeffecthook">UseEffect</NavLink>
              <NavLink className="dropdown-item" to="/useeffecttimer">UseEffect Timer</NavLink>
              <NavLink className="dropdown-item" to="/useeffectdatafetch">UseEffect API</NavLink>
              <NavLink className="dropdown-item" to="/mapfunction">Map Function</NavLink>
              <NavLink className="dropdown-item" to="/usecontextapichaicode">Context API 1</NavLink>
              <NavLink className="dropdown-item" to="/usethemecontext">Context API 2</NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="ReactProject" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Projects
            </a>
            <div className="dropdown-menu" aria-labelledby="ReactProject">
              <NavLink className="dropdown-item" to="/pastes">PasteApp</NavLink>
              <NavLink className="dropdown-item" to="/dynamiccolor">Dynamic Color</NavLink>
              <NavLink className="dropdown-item" to="/colorchange">Color Change</NavLink>
              <NavLink className="dropdown-item" to="/passwordgenerate">Password Generator</NavLink>
              <NavLink className="dropdown-item" to="/currencyconverter">Currency Converter</NavLink>
              <NavLink className="dropdown-item" to="/tailwindnavbar">Tailwind Navbar</NavLink>
              <NavLink className="dropdown-item" to="/contextapitodo">ContextAPI Todos</NavLink>
              <NavLink className="dropdown-item" to="/blog/blog">Mega Blog</NavLink>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="reduxDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Redux
            </a>
            <div className="dropdown-menu" aria-labelledby="reduxDropdown">
              <NavLink className="dropdown-item" to="/redux">Redux Counter</NavLink>
              <NavLink className="dropdown-item" to="/redux-users">User List</NavLink>
              <NavLink className="dropdown-item" to="/redux-todo">Redux TODO</NavLink>
            </div>
          </li>

          {/* Forms Dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="formsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Forms
            </a>
            <div className="dropdown-menu" aria-labelledby="formsDropdown">
              <NavLink className="dropdown-item" to="/reacthookfrom">React Hook Form</NavLink>
              <NavLink className="dropdown-item" to="/simplereactform">Simple React Form</NavLink>
            </div>
          </li>


          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/conditionalrendering">Conditional Rendering</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/eventhandling">Event Handling</NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );

}

export default Navbar