import { useRef } from "react";
import { FaBars, FaTimes, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
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
        <Link to="/home">HOME</Link>
        <Link to="/activities">ACTIVITY</Link>
        <Link to="/about">ABOUT ME</Link> 
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <h3>
        {/* <SearchBar /> */}
      </h3>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <SearchBar />
    </header>
  );
};

export default NavBar;
