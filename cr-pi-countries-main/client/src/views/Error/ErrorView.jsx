import { useNavigate } from "react-router-dom";
import style from "./ErrorView.module.css";


const ErrorView = () => {
  const navigate = useNavigate();

  return (
    
    <div className={style.container}>
      {/* <h1>Pagina de Error</h1> */}

      <div className={style.containerButton}>
      <button className={style.button} 
      onClick={(event)=>{
          event.preventDefault();
          navigate("/home");
      }}> Go Home </button>
    </div>
    </div>
  )
}

export default ErrorView