import {
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  ORDER_NAME,
  ORDER_POPULATION,
  LOAD_COUNTRIES 
} from "./action";

// Se crea el estado inicial con todas sus propiedades vacias.
const initialState = {
  myActivity: [],
  allCountries: [],

  continent: "",
  country: [],
  countries: [],
  activities: [],
  actualPage: 1
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CONTINENT:
      let copy2 = state.allCountries.filter((country) => {
        //REVISAR
        return country.continent === action.payload;
      });
      return { ...state, allCountries: copy2 };

    case FILTER_ACTIVITY:
      let copy3 = state.myActivity.filter((country) => {
        return country.activity === activity.payload;
      });
      return { ...state, myActivity: copy3 };

    case ORDER_NAME:
      let copy4 = state.allCountries.sort((a, b) => {
        return action.payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return { ...state, allCountries: copy4 };

    case ORDER_POPULATION:
      let copy = state.allCountries.sort((a, b) => {
        return action.payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return { ...state, allCountries: copy };

    case LOAD_COUNTRIES:
      {
        
          // Si el state continente no esta vacio, retorna todos los countries que coincidan con el continente
          // if(state.continent !== ''){
               return {
                    ...state,
                    actualPage: 1,
                    countries: action.payload,
               }
          // }else           
          
          // // Si no hay nada en el state.continent retorna todos los countries
          // return {
          //      ...state,
          //      actualPage: 1,
          //      countries: action.payload
          // }
      } 
    default:
      return { ...state };
  }
};

export default rootReducer;
