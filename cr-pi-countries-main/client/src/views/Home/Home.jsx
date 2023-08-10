import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllActivities, getAllCountries } from "../../redux/actions";
import { orderByName, orderByPopulation } from "../../redux/actions";
import { filterCountryByContinent, filterCountryByActivity } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  // const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [aux, setAux] = useState(false);
  // const [filter, setFilter] = useState(false);

  //? Dispatch al cargar--- Llena todos los paises
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  // //? Cargar las actividades en el Select
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  //Order by Name
  const handleOrderN = (e) => {
    dispatch(orderByName(e.target.value));
  
    if (aux) setAux(true);
    else setAux(false);
  };

  //Order By Population
  const handleOrderP = (e) => {
    dispatch(orderByPopulation(e.target.value));
    
    if (aux) setAux(true);
    else setAux(false);
  };

  const handleFilterByContinent = (event) => {
    dispatch(filterCountryByContinent(event.target.value));
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
        <div className={style.filter}><h4> FILTER →</h4></div>
          <div>   
            <label htmlFor="select"> <h5> ACTIVITY:</h5> </label>
              {
                <select id="activity" name="activity" className="form-control" onChange={handleFilterByActivity}>
                  <option value="all">All</option>
                  {activities.map((actividad) => {
                    return (<option key={actividad.id} value={actividad.name}> {actividad.name} </option> );
                  })}
                </select>
              }
          </div>

          <div>
          <label htmlFor="select"> <h5>CONTINENT:</h5> </label>
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

        <div className={style.order}><h4>| ORDER →</h4></div>
          <div>
            <label htmlFor="select"> <h5>ALPH:</h5> </label>
            <select onChange={handleOrderN}>
              <option value="">Choose</option>
              <option value="az">az</option>
              <option value="za">za</option>
            </select>
          </div>

          <div> 
            <label htmlFor="select"> <h5>POPULATION:</h5> </label>
            <select onChange={handleOrderP}>
              <option value="">Choose</option>
              <option value="max">Max To Min</option>
              <option value="min">Min To Max</option>
            </select>
          </div>
      </div>

      <Cards />
    </div>
  );
};

export default Home;