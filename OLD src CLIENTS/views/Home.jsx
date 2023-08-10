import React,  { useState } from "react";
import styles from "./Home.module.css";
import Card from "../components/Card/Card";
import { loadCountries } from "../redux/action";

const Home = () => {
  const [countries, setCountries] = useState([]);
  

  const onSearch = async () => {
    loadCountries();
    // console.log(`eL ID ES ${id}`);
    // if (countries.find((country) => country.id == id)) {
    //   return alert("País ya en pantalla.");
    // }

    const response = await axios(`http://localhost:5000/countries/`);
    // const data = response.data;
    try {
      // console.log(`data: ${response}`);
      const { id, name } = response;

      // if (data.name) {
      //   setCountries((oldCountry) => [...oldCountry, data]);
      // } else {
      //   // swal("Lo siento", "¡No hay personajes con este ID!", "error");
      //   window.alert("¡No hay PAIS con este ID!");
      // }
    } catch (error) {
      //   swal("Lo siento", "¡Hubo un Error!", "error");
      console.log({ error: error.message });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Countries Home</h2>
        <div className={styles.container2}>

          
          
        {countries.map(({ id, name }) => {
          return <Card 
          id={id} 
          name={name} />;
        })}
        </div>
        <h3>Fin de Home</h3>
      </div>
    </>
  );
};

export default Home;
