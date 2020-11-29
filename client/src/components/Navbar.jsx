import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const auth = useContext(AuthContext)
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
  }
  if (auth.isAuth) {
    return (
      <nav className="sidenav-trigger">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">URL Shorter</a>
          <ul id="nav-mobile" className="right">
            <li><NavLink to="/create">create</NavLink></li>
            <li><NavLink to="/detail">detail</NavLink></li>
            <li><NavLink to="/links">links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Logo</a>
      </div>
    </nav>
  )
}