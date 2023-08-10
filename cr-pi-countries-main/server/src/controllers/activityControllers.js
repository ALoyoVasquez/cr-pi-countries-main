const { Activity, Country } = require("../db");

//? Crear una Actividad
const createActivity = async ( name, difficulty, duration, season, countries ) => {
  
  let newActivity = await Activity.create({                           
    name,
        difficulty,
        duration,
        season,
        countries
      });
      
      const actividad = await Country.findOne({
        where: { idCountry: countries}
      });
      
      countries.forEach(async (country) => {
        let activityCountry = await Country.findOne({
          where: { idCountry: country }                                                       
        })                                                          
        await newActivity.addCountries(activityCountry)
      })
      return newActivity;
}

//? Obtiene todas las Actividades
const getActivities = async () => {

  const activities = await Activity.findAll({
    include: Country, //incluye el pais al que pertenece la actividad
  });

  return activities;
};
  
  module.exports = { getActivities, createActivity }