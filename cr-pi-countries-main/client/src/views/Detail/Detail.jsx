import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getCountry } from "../../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";
import formatNumber from "../formatNumber";

const Detail = (state) => {
  
  const { idCountry } = useParams();
  const navigate = useNavigate();

  const [countries, setCountries] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/countries/${idCountry}`)
    .then(({ data }) => {
      if (data.name) setCountries(data);
      else window.alert("Countries not Found.");
    });
    return setCountries({});
  }, [idCountry]);

  const onClose = (idCountry) => {
    console.log("entro en el close")
    console.log(countries);
    setCountries(
      countries.filter((countrys) => {
        return countrys.idCountry !== idCountry;
      })
    );
  };

  return (
    <>
    <div className={style.container}>
      {/* <h1>Detail</h1> */}
      <div className={style.container2}>
        <div className={style.divImg}>
          <img src={countries.flags} alt="flag" className={style.imgStyle} />
          {/* <hr /> */}
          <h1 className={style.name }> {countries.name}</h1>
        </div>
        <div className={style.detail}>
          <h2> <img src="/src/assets/star3.png" height="30px" alt="icon-idCountry" />  {idCountry}</h2>
          <h2>
          { 
          countries.continent==="Asia" ? <img src="/src/assets/asia.png" height="30px" alt="icon-continent-asia" /> 
          : countries.continent==="Africa" ? <img src="/src/assets/africa.png" height="30px" alt="icon-continent-africa" />
          : countries.continent==="Antarctica" ? <img src="/src/assets/antarctica.png" height="30px" alt="icon-continent-antartica" />
          : countries.continent==="Europe" ? <img src="/src/assets/europe.png" height="30px" alt="icon-continent-europe" />
          : countries.continent==="North America" ? <img src="/src/assets/northamerica.png" height="30px" alt="icon-continent-northAm" />
          : countries.continent==="South America" ? <img src="/src/assets/southamerica.png" height="30px" alt="icon-continent-southAm" />
          : <img src="/src/assets/oceania.png" height="30px" alt="icon-continent-oceania" />
        }  {"  "} {countries.continent} </h2>
          <h2>  <img src="/src/assets/location.png" height="30px" alt="icon-capital" />  {countries.capital} </h2>
          <h2> <img src="/src/assets/Region.png" height="30px" alt="icon-region" />  {countries.subregion} </h2>
          <h2> <img src="/src/assets/m2.png" height="30px" alt="icon-area" />  {formatNumber(countries.area)} km2</h2> 
          <h2> <img src="/src/assets/population.png" height="30px" alt="icon-population " />  {formatNumber(countries.population)} hab</h2>
          <h3>     
            <img src="/src/assets/activities.jpg" height="30px" alt="icon-activities " />  
            {
            countries.Activities
            ? ( countries.Activities.map((act)=> " | "+ act.name))
            :  console.log("No Activities.")
            }
          </h3>
     </div>
      </div>
    </div>
    <div className={style.containerButton}>
      <button className={style.button} 
          onClick={ 
                    ()=>{
                      navigate(-1);

                      console.log(state);
              // event.preventDefault();
      }
      }
      > Go Home </button>
    </div>
  </>
  );
};

export default Detail;
