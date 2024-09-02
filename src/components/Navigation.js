import React, { useState } from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import icon from '../images/icon.jpg';
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="d-flex align-items-center">
        <img src={icon} alt="logo" className="logo" />
        <h3 className="mt-2 mx-4">Space Travelers Hub</h3>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Rokets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/dragons">Dragons</NavLink>
        </li>
        <li>
          <NavLink to="/my_profile">MyProfile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;