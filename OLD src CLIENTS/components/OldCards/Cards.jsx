import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "../OldCards/Cards.module.css";
import { loadCountries } from "../../redux/action";
// import {loadCountries, getCountryName, setContinent} from '../../actions/actions'
// import Paginator from '../Paginator/Paginator';
// import s from './ContainerCountries.module.css';

export default function Cards() {
  // const countries = useSelector((state) => state.countries);

  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // useEffect es un hook que nos permite ejecutar codigo despues de que el componente se renderice
    dispatch(loadCountries()); // en este caso estamos despachando la accion getCountries para que se ejecute despues de que el componente se renderice
    // dispatch(getActivities());                                             // y despachando la accion getActivities para que se ejecute despues de que el componente se renderice
  }, [dispatch]);

  return (
    <div>
      <div className={style.container}>
        {/* {countries.length > 0 ? countries.map((country, index) =>{ */}
        {/* // Se crea un CardCountry por cada country en el state. Si es la pagina 1, solo muestra 9 countries */}
        {/* if(actualPage === 1 & index <9){ */}
        {/* return ( */}
        <div className={s.cards}>
          {currentCountries &&
            currentCountries.map((country) => {
              // mapeamos el array de paises, y creamos una card por cada pais
              return (
                <div>
                  <Card
                    key={country.id}
                    id={country.id}
                    flags={country.flags}
                    idCountry={country.idCountry}
                    name={country.name}
                  />
                </div>
              );
            })}
        </div>

        {/* <Card 
            key={country.id} 
            id = {country.id}
            flags={country.flags}
            idCountry={country.idCountry}
            name={country.name}
            continent={country.continent}  
            population={country.population}      
          /> */}
      </div>

      {/* Div que contiene el paginador */}
      <div>{/* <Paginator countriesLength={countries.length}/> */}</div>
    </div>
  );
}
