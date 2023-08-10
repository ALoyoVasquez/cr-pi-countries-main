import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.myButton}
          onClick={(event)=>{          
            event.preventDefault();
            navigate("/home");
          }} 
          > ENTER </button>
      </div>
    </div>
  );
};

export default Landing;
