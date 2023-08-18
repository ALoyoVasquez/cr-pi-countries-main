import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllActivities, getAllCountries } from "../../redux/actions";
// import { orderByName, orderByPopulation } from "../../redux/actions";
import { filterCountryByContinent, filterCountryByActivity } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";
import filterImg from "../../assets/filters.png"

const Home = () => {
  const dispatch = useDispatch();
  // const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [aux, setAux] = useState(false);
  const [continente, setContinente] = useState("all") 

  //? Dispatch al cargar--- Llena todos los paises
  useEffect(() => {
    dispatch(getAllCountries());
  }, [aux, dispatch]);

  // //? Cargar las actividades en el Select
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  // let continente="";

  const handleFilterByContinent = (event) => {
    dispatch(filterCountryByContinent(event.target.value));
    setContinente(event.target.value);
    console.log(event.target.value);
    if (aux) setAux(true);
    else setAux(false);
  };

  const handleFilterByActivity = (event) => {
    // console.log("Actv: "+event.target.value)
    dispatch(filterCountryByActivity(event.target.value));
    if (aux) setAux(true);
    else setAux(false);
  };

  return (
    <div className={style.container}>
      <div className={style.containFO}>
        <img src={filterImg} alt="filter-icon" height="32px" />
        &nbsp;&nbsp;&nbsp;

          <div className={style.filter}>
            <label htmlFor="select" className={style.h4}> ACTIVITY </label>
            <label htmlFor="select" className={style.h5}> ACTIVITY→{" "} </label>
              {
                <select id="activity" name="activity" className={style.select} onChange={handleFilterByActivity}>
                  <option value="all">All</option>
                  {activities.map((actividad) => {
                    return (<option key={actividad.id} value={actividad.name}> {actividad.name} </option> );
                  })}
                </select>
              }
          </div>

          <div className={style.filter}>
          <label htmlFor="select" className={style.h4}> CONTINENT </label>
          <label htmlFor="select" className={style.h5}> CONTINENT: </label>
          <select onChange={handleFilterByContinent} className={style.select} >
              <option value="all">All</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
      </div>

      <div className={style.containeP}>
            <div className={style.tarjeta}>
              <Cards value={continente} />
              {/* {console.log(Cards[0])} */}
            </div>
      </div>              
    </div>
  );
};

export default Home;