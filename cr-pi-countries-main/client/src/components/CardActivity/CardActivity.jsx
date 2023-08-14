import style from "./CardActivity.module.css";
import loadImg from "../../assets/loading.gif"

const CardActivity = ({ id, name, season,  duration, difficulty, countries, pais }) => {

    let banderas=[];

    for (let i = 0; i < countries.length; i++) {
        banderas.push(countries[i].flags)
    }

    countries ? countries : (countries = banderas);

  return (
    <div className={style.container}>
      {name ? (
        <div className={style.container1}>
          <div className={style.flag}>
            {
              banderas.length > 1
              ?  (banderas.map((band)=>{
                <h1>{pais}</h1>
                //  {console.log(pais)}
                //{<img src={band} alt="img" key={band} className={style.img} />} 
                 }) )
              : <img src={countries[0].flags} alt={countries} className={style.img} />
            }       
          </div>
          <div>
            <span className={style.span}>| NAME: </span>{" "}
            <label className={style.labelN}>{name}</label>
            <span className={style.span}>| SEASON: </span>{" "}
            <label className={style.labelN}> {season}</label>
            <span className={style.span}>| DURATION: </span>{" "}
            <label className={style.labelN}> {duration}hrs</label>
            <span className={style.span}>| DIFFICULTY: </span>
            <label className={style.labelN}> {difficulty}</label>
          {/* <h3><img src={loadImg} alt="loading..." /></h3> */}
          </div>
        </div>
      ) : (
        <h3><img src={loadImg} alt="loading..." /></h3>
      )}
      <hr />
    </div>
  );
};

export default CardActivity;
