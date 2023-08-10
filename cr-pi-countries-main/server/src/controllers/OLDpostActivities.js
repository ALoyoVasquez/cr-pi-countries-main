const { Activity, Country } = require("../db");

const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  
  if ( !name || !difficulty || !duration || !season || !countries) {
    res.status(401).send("Missing data");
  }
  // country_activities
  try {
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
  
  res.status(200).json(actividad);
  
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

module.exports = { postActivities };