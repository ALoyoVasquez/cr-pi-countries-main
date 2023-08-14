import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { orderByName, orderByPopulation } from "../../redux/actions";
import sortImg from "../../assets/sort_az2.png"


const Cards = () => {
  //? Estado
  const countries = useSelector((state) => state.countries);

  //? Order
  const [order, setOrder] = useState(false);
  const dispatch = useDispatch();

  //? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  let data = countries;
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage); //? Calcula la cantidad de paginas de acuerdo al numero de paises
  let startIndex = currentPage * itemsPerPage;
  let selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);

  const handleMoveLeft = (evt) => {
    data = countries;

    setCurrentPage(currentPage - 1);    
    startIndex = currentPage * itemsPerPage;
    selectedCountries = data.slice(startIndex, startIndex - itemsPerPage);
    
    return selectedCountries;
  };
  
  const handleMoveRight = (evt) => {
    data = countries;
   
    setCurrentPage(currentPage + 1);
    startIndex = currentPage * itemsPerPage;
    selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);
   
    return selectedCountries;
  };
  
  
  const handleMoveGo = (event) => {
    
    data = countries;
    
    let n = parseInt(event.target.value)
    
    setCurrentPage(n);
    startIndex = currentPage * itemsPerPage;
    selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);
    return selectedCountries;
  };
  //?Fin Paginado

  //? Order
  const handleOrderP = (e) => {
    dispatch(orderByPopulation(e.target.value));

    if (!order) setOrder(true);
    else setOrder(false);
  };

  const handleOrderN = (e) => {
    dispatch(orderByName(e.target.value));

    if (!order) setOrder(true);
    else setOrder(false);
  };

  return (
    <>
      <div className={style.containFo}>
        <img src={sortImg} alt="sort-icon" width="32px"/>
        &nbsp;&nbsp;&nbsp;
        {/* <span className={style.h4}> ORDER → </span>
        <img src={sortImg} alt="sort-icon" className = {style.icono} /> */}
        <div className={style.order}>
          <label htmlFor="select" className={style.h4}>POPULATION:{" "}</label>
          <label htmlFor="selectR" className={style.h5}>PEOPLE:{" "}</label>
          <select onChange={handleOrderP} className={style.select}>
            {/* <option value="Choose" >Choose</option> */}
            <option value="max">Max To Min</option>
            <option value="min">Min To Max</option>
          </select>
        </div>
        <div>
          <div className={style.order}>
            <label htmlFor="select" className={style.h4}> ALPHABETICAL: {" "} </label>
            <label htmlFor="selectr" className={style.h5}> ALPHA: {" "} </label>
            <select onChange={handleOrderN} className={style.select}>
              <option value="Choose">Choose</option>
              <option value="az">Az</option>
              <option value="za">Za</option>
            </select>
          </div>
        </div>
      </div>
            <div>
              <h2>
                { currentPage > 0 
                  ? <button onClick={handleMoveGo} value={0} id="uno" name="uno" className={style.button2}> start </button>
                  : <button onClick={handleMoveGo} value={0} id="uno" name="uno" className={style.button2} disabled> start </button>
                }
                { currentPage > 0 
                ? ( <button onClick={handleMoveLeft} id="prev" name="pre" className={style.button}         > {currentPage}{" <"} </button> )
                : ( <button onClick={handleMoveLeft} id="prev" name="pre" className={style.button} disabled> {currentPage}{" <"} </button> )
              }
                {"  "} {currentPage + 1} {"  "}
                { currentPage < pageCount - 1 
                  ? ( <button onClick={handleMoveRight} id="next" name="next" className={style.button} >         {"> "}{currentPage+2}</button>)
                  : ( <button onClick={handleMoveRight} id="next" name="next" className={style.button} disabled> {"> "}{currentPage+2}</button>)
                }
                { currentPage < pageCount - 1 
                  ? <button onClick={handleMoveGo} value={pageCount-1} id="ultima" name="ultima" className={style.button2}>last </button> 
                  : <button onClick={handleMoveGo} value={pageCount-1}   id="ultima" name="ultima" className={style.button2} disabled>last</button>
                }
              </h2>
            </div>

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
    </>
  );
};

export default Cards;
