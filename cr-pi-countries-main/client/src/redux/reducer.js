import { GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID } from "./actions";
import { FILTER_CONTINENT, FILTER_ACTIVITY } from "./actions";
import { ORDER_BY_NAME, ORDER_BY_POPULATION } from "./actions";

const initialstate = {
  countries: [],
  activities: [],
  order: 'az',
  allCountries: [],
  allActivities: [],
};

const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return { ...state, countries: action.payload, allCountries: action.payload };
    }

    case GET_COUNTRY_BY_NAME: {
      return { ...state, countries: action.payload};
    }

    case GET_COUNTRY_BY_ID: {
      return { ...state, countries: action.payload};
    }

    case GET_ALL_ACTIVITIES:{
      return { ...state, activities: action.payload,  allActivities: action.payload };
    }

    //? Filter By Continent and Activity
    case FILTER_CONTINENT:
      let continentFiltered = 
                action.payload === 'all' 
                ? state.allCountries 
                : state.allCountries.filter(country => country.continent === action.payload) 
     
      return { ...state, countries: continentFiltered }

    case FILTER_ACTIVITY:
      // const activities = state.activities
      // const countries = state.countries
      // console.log("Action. "+action.payload)
      let activityFiltered = 
            action.payload !== 'all' 
            ? state.allActivities.filter(activity => activity.name === action.payload) 
            : state.allActivities 

      let paises= activityFiltered[0].countries;

      let countriesAct =
            activityFiltered=== state.allActivities
            ? state.allCountries
            : state.allCountries.filter(countryA => paises.includes(countryA.idCountry)) 
                
        return { ...state, countries: countriesAct };

    //? ORDER BY NAME & POPULATION
    case ORDER_BY_NAME: {
      action.payload === 'az'
       ? state.countries.sort(function (a, b) { 
          if (a.name > b.name) return 1 
          if (b.name > a.name) return -1
            return 0 
          }) 
	    :  action.payload === 'za'
      ? state.countries.sort(function (a, b) {
        if (a.name > b.name) { return -1}
        if (b.name > a.name) { return 1 }
          return 0
        })

      return {...state, order: action.payload  }
    }
    
    case ORDER_BY_POPULATION:{
      let countriesOrderP = 
          action.payload === "max" 
          ? state.countries.sort((min, max) => max.population - min.population )
          : state.countries.sort((min, max) => min.population - max.population )
  
      return {...state, countries: countriesOrderP  }
    }
    //? END

    default:
      return { ...state };
  }
};

export default rootReducer;
