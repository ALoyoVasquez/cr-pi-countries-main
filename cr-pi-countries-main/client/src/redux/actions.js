import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const POST_ACTITITY = "POST_ACTITITY";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_NAME = "ORDER_BY_NAME";


const URL = "http://localhost:3001";

export const getAllCountries = () => {
  return async function (dispatch) {
    const data = await axios.get(`${URL}/countries`);
    const countries = data.data;
    dispatch({ type: GET_ALL_COUNTRIES, payload: countries });
  };
};

export const getCountryById = (idCountry) => {
  console.log(idCountry);
  return async function (dispatch) {
    const data = await axios.get(`${URL}/countries/${idCountry}`);
    const country = data.data;
    dispatch({ type: GET_COUNTRY_BY_ID, payload: country });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const data = await axios.get(`${URL}/countries?name=${name}`);
    const country = data.data;
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: country });
  };
};

//?Activities
export const getAllActivities = () => {
  return async function (dispatch) {
    const data = await axios.get(`${URL}/activities`);
    const activity = data.data;
    dispatch({ type: GET_ALL_ACTIVITIES, payload: activity });
  };
};
//? Crete Activities
export function postActivity(data) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/activities/`, data)
    .then(res=> alert("Activity Created"))
    .catch(error=> alert(error));
  }
};




//? Filtros x Continente y Actividad
export const filterCountryByContinent = (continent) => {
    return { type: FILTER_CONTINENT, payload: continent };
};
export const filterCountryByActivity = (activity) => {
    return { type: FILTER_ACTIVITY, payload: activity };
};

//? Order By Population and Alph
export const orderByPopulation = (ordenP) => {
  return { type: ORDER_BY_POPULATION, payload: ordenP };
};

export const orderByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};

