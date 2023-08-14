import { useRef } from "react";
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
      <div className="head">
        <img src="/src/assets/globe_icon_w.svg" alt="globe-icon" height="28px"/>
        <h1>  _ Countries _ </h1>
      </div>
      <nav ref={navRef}>
        <Link to="/home">HOME</Link>
        <Link to="/activities">ACTIVITY</Link>
        <Link to="/about">ABOUT ME</Link> 
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <img src="/src/assets/times-icon.png" alt="times-icon" height="28px"/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <img src="/src/assets/bars.png" alt="bars-icon" height="28px"/>
      </button>
      <SearchBar />
    </header>
  );
};

export default NavBar;
