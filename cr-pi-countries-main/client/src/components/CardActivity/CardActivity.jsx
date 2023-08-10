import style from "./CardActivity.module.css";

const CardActivity = ({ id, name, season,  duration, difficulty, countries, pais }) => {

    let banderas=[];

    //   console.log("BANDERA: " + pais[0]);
    for (let i = 0; i < countries.length; i++) {
        banderas.push(countries[i].flags)
    }


    // console.log(banderas) 
    // console.log(Array.isArray(pais)) 
    countries 
    ? countries 
    : (countries = banderas);


    let st="";

    // banderas.length > 1
    // ? banderas.map((band)=>{
    //     st = band;
    //     console.log(st) 
    // } )
    // : console.log("Banderas es menor")

  return (
    <div className={style.container}>
      {name ? (
        <div className={style.container1}>
          <div className={style.flag}>
            {/* {console.log(Array.isArray(countries))} */}
            {
                banderas.length > 1
                ? (banderas.map((band)=>{ 
                    console.log(band);
                    <img src={band} alt={band} className={style.img} />}) 
                    // console.log(band)})
                    )
                    : <img src={countries[0].flags} alt={countries} className={style.img} />
            }
                    {/* <img src={banderas} alt={banderas} className={style.img} />})  */}
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
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
      <hr />
    </div>
  );
};

export default CardActivity;
