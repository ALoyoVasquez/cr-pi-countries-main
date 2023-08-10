import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css";
import { loadCountries } from '../../redux/action';


const Card = (props) => {

  const {id, flags, name, idCountry, continent, population, capital} = props;

  return(
       <div  className={styles.container}>
            <div >
                 <img src={`${flags}`} alt="flag-img" />
            </div>
            <div >
                 <p className={styles.p}><span>CONTINENT:</span>{continent}</p>
                 <h3 className={styles.name}>{name}</h3>
                 {/* <Link to={`/countries/info/${id}`} className={s.button}>Mas Informacion</Link>                     */}
            </div>
       </div>
  )
};

export default Card
