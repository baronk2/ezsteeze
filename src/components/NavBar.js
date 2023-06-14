import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



export function NavBar(props) {
  const [displayNav, setDisplayNav] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    if (displayNav == false) {
      setDisplayNav(true);
    } else {
      setDisplayNav(false);
    }
  }
  return (
    <div className="nav-container">
      <nav>
        <img src="./img/Hamburger_icon.svg.png" className="hamburger" onClick={handleClick}/>
        <img src="img/pias__logo.svg" className="PIAS-logo" alt="Play It Again Sports logo" draggable="false" />
        <ul className={displayNav ? "nav-hidden" : "nav-show"}>
          <li onClick={handleClick}><NavLink to='home' id="home">HOME</NavLink></li>
          <li className="menu-item"><NavLink to='equipment-selection'>RENTALS</NavLink>
            <ul className="submenu">
              <li onClick={handleClick}><NavLink to='appointment'>SKIING</NavLink></li>
              <li onClick={handleClick}><NavLink to='appointment'>SNOWBOARDING</NavLink></li>
              <li onClick={handleClick}><NavLink to='appointment'>PADDLEBOARDING</NavLink></li>
            </ul>
          </li>
          <li onClick={handleClick}><NavLink to='about'>ABOUT US</NavLink></li>
          <li><NavLink className="menu-item book-now-nav" to='appointment'>BOOK NOW!</NavLink></li>
          {props.user ? (
            <li><button className="sign-out-button" onClick={props.handleSignOut}>SIGN OUT</button></li>
          ) : (
            <li onClick={handleClick}><NavLink className="menu-item sign-in-nav" to='sign-in'>SIGN IN</NavLink></li>
          )}
        </ul>
      </nav>
    </div>
  );
}