const { Activity, Country } = require("../db");

//! Busca TODAS LAS ACTIVIDADES o el Pais por ID
const getCountriesById = async (req, res) => {

  let { idCountry } = req.params;

  if(idCountry === 'activities'){ //! Si es /activities => Busca TODAS LAS ACTIVIDADES
    try {
      const activities = await Activity.findAll({
        // include: Country, //incluye el pais al que pertenece la actividad
      });

      res.status(200).send(activities);
  
    } catch (error) {
    
      res.status(500).json({ error: error.message });
    }

  }else{//! Si NO => Busca un Pais con ese ID

    try {
      idCountry = idCountry.toUpperCase();
  
      const myCountry = await Country.findOne({ where: { idCountry } });
  
      return res.status(200).json(myCountry);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

};

module.exports = { getCountriesById };
