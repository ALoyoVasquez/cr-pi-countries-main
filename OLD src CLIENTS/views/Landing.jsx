// import React from "react";
import styles from "./Landing.module.css";
// import Home from '../views/Home.jsx'
import { useNavigate } from "react-router-dom";


const Landing = () => {

  const navigate = useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
    navigate("/") ;
    // <Home/>
    // alert("Clicleo boton")
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to Countries</h1>
      <div className={styles.containerImg}>IMAGEN</div>

      <div className={styles.containerExpl}>
        <h5 className={styles.h5}>PI Ana M. Loyo V.</h5>
        <hr />
        {/* <React-Fragment>

        <Link to="/home"> Home </Link>
        </React-Fragment> */}
        <button onClick={handleSubmit}>ENTER</button>
      </div>
    </div>
  );
};

export default Landing;