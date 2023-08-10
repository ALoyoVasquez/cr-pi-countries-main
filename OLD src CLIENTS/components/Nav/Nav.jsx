import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import "./Nav.css";
import PATHROUTE from "../../helper/Route.helper.js";

const Nav = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>&nbsp;</h3>
      <h3>
        <FaGlobeAmericas />
        &nbsp;
      </h3>
      <nav ref={navRef}>
        <Link to={PATHROUTE.HOME}>HOME</Link>
        <Link to={PATHROUTE.ACTIVITY}>ACTIVITY</Link>
        <Link to={PATHROUTE.ABOUT}>ABOUT ME</Link>
        {/* <Link to={PATHROUTE.HOME}>EXIT</Link> */}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <h3>
        <SearchBar />
      </h3>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Nav;
