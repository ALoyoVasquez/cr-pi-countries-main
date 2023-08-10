import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {

  //? Estado
  const countries = useSelector((state) => state.countries);

  ////////////////////////? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  let data = countries; 
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage); //? Calcula la cantidad de paginas de acuerdo al numero de paises
  let startIndex = currentPage * itemsPerPage;
  let selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);

const handleMoveLeft = (evt) => {
  data=countries;
  setCurrentPage(currentPage-1);
  startIndex = currentPage * itemsPerPage;
  selectedCountries = data.slice(startIndex, startIndex - itemsPerPage);
  return selectedCountries;
}

const handleMoveRight = (evt) => {
  data=countries;
  setCurrentPage(currentPage+1);
  startIndex = currentPage * itemsPerPage;
  selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);

  return selectedCountries;
}
  ////////////////////////?

  return (
    <>
    <div className={style.container}>
      {selectedCountries.map((country) => {
        return (
          <Card
            key={country.id}
            id={country.id}
            flags={country.flags}
            idCountry={country.idCountry}
            name={country.name}
            continent={country.continent}
            />
        );
      })}
    </div>
    <div>
    <h2>
      {
        currentPage > 0 
        ? <button onClick={handleMoveLeft} id="prev" name="pre"> {'< previous'} </button> 
        : <button onClick={handleMoveLeft} id="prev" name="pre" disabled> {'< previous'} </button> 
      }
      {"  "} {currentPage+1}{"  "}
      {
        currentPage < pageCount-1 
        ? <button onClick={handleMoveRight}id="next" name="next"> {'next > '} </button>
        : <button onClick={handleMoveRight}id="next" name="next" disabled> {'next > '} </button>
      }
      </h2> 
      </div>
    </>
  );
};

export default Cards;
