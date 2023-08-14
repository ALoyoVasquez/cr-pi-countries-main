import { Link } from "react-router-dom";
import style from "./Card.module.css";
import loadImg from "../../assets/loading.gif"

const Card = (props) => {
  return (
    <div className={style.container}>
      { props.name ? ( 
      <>
        {/* console.log({props.name.length}) */}
        <img src={props.flags} alt="imgflags" className={style.imgStyle} />
        {
          props.name.length > 18
          ? <h3 className={style.name2}>{props.name.toUpperCase()} </h3>
          : <h2 className={style.name}>{props.name.toUpperCase()} </h2>
        }
        <p className={style.continent}>
          { 
          props.continent==="Asia" ? <img src="/src/assets/asia.png" height="30px" alt="continent" /> 
          : props.continent==="Africa" ? <img src="/src/assets/africa.png" height="30px" alt="continent" />
          : props.continent==="Antarctica" ? <img src="/src/assets/antarctica.png" height="30px" alt="continent" />
          : props.continent==="Europe" ? <img src="/src/assets/europe.png" height="30px" alt="continent" />
          : props.continent==="North America" ? <img src="/src/assets/northamerica.png" height="30px" alt="continent" />
          : props.continent==="South America" ? <img src="/src/assets/southamerica.png" height="30px" alt="continent"  />
          : <img src="/src/assets/oceania.png" height="30px" alt="continent" />
          }
          {props.continent}{" "}
        </p>
        <p className={style.id}>
          <img src="/src/assets/star3.png" height="20px" className={style.iconId} alt="icon" />
          {props.idCountry} </p>

          <Link to={`/Detail/${props.idCountry}`}>
                  <button className={style.button}>MORE INFO</button>
          </Link>
      </>
      ): ( <h3><img src={loadImg} alt="loading..." /></h3>)
      }
    </div>
  );
};

export default Card;
