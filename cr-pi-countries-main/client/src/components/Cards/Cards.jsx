import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderByName, orderByPopulation } from "../../redux/actions";
import { getAllActivities, getAllCountries } from "../../redux/actions";
import { filterCountryByContinent, filterCountryByActivity } from "../../redux/actions";
import Card from "../Card/Card";
import formatNumber from "../../views/formatNumber.js"
import style from "./Cards.module.css";
//? IMGS INFO CONTINENTE, filter and sort
import { s_america, n_america, europe, asia, oceania, africa, antartica, sortImg, filterImg} from "../../assets/index.js";



const Cards = () => {

  //? Estado
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  
  //? Order
  const [order, setOrder] = useState(false);
  const dispatch = useDispatch();
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


  //? Paginado
  const [currentPage, setCurrentPage] = useState(0);
  let data = countries;
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage); //? Calcula la cantidad de paginas de acuerdo al numero de paises
  let startIndex = currentPage * itemsPerPage;
  let selectedCountries = data.slice(startIndex, startIndex + itemsPerPage);

  let totalPeople=0;
  let totalArea=0;
  
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
    setCurrentPage(0);
    dispatch(orderByPopulation(e.target.value));
    
    if (!order) setOrder(true);
    else setOrder(false);
  };
  
  const handleOrderN = (e) => {
    setCurrentPage(0);
    dispatch(orderByName(e.target.value));
    
    if (!order) setOrder(true);
    else setOrder(false);
  };

  const handleFilterByContinent = (event) => {
    setCurrentPage(0);
    dispatch(filterCountryByContinent(event.target.value));
    setContinente(event.target.value);
    console.log(event.target.value);
    if (aux) setAux(true);
    else setAux(false);
  };

  const handleFilterByActivity = (event) => {
    setCurrentPage(0);
    dispatch(filterCountryByActivity(event.target.value));
    if (aux) setAux(true);
    else setAux(false);
  };
  
  return (
    <>
      <div className={style.containFo}>
        <img src={sortImg} alt="sort-icon" width="32px"/>
        &nbsp;&nbsp;&nbsp;

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

      <div  className={style.containFo}>
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

      {/* //? Paginado */}
            <div className={style.paginado}>
              <h2>
                { currentPage > 0 
                  ? <button onClick={handleMoveGo} value={0} id="uno" name="uno" className={style.button2}>          start </button>
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
          {/* //? End-Paginado */}

          <div className={style.containeP}>
            {countries.map((popul)=>{
              totalPeople=totalPeople+popul.population
              totalArea = totalArea+popul.area
              })
            }

            { continente ==="all" 
            ? console.log("no muestra nada")
            : ( <div className={style.continen} >
                  <span className={style.info}> 
                  This is one of the 7 continents of the world.
                    <br /> It has {countries.length} countries and its total population reaches {formatNumber(totalPeople)} inhabitants.
                    <br /> It also covers an area of {formatNumber(totalArea )} km2
                  </span>
                  //? Imgs Lateral Bar 
                  {continente==="South America"     ? <img src={s_america} alt="southAmerica"/>
                    : continente==="North America"  ? <img src={n_america} alt="northAmerica" /> 
                    : continente === "Africa"       ? <img src={africa} alt="Africa" />
                    : continente === "Europe"       ? <img src={europe} alt="Europe" />
                    : continente === "Antarctica"   ? <img src={antartica} alt="Antarctica" />
                    : continente === "Asia"         ? <img src={asia} alt="Asia" />
                    : <img src={oceania} alt="oceania" /> 
                  }   
                </div>
              )
            }

            <div className={continente ==="all" ? style.container : style.containerF}>  
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
          </div>
    </>
  );
};

export default Cards;
