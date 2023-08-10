const { Activity, Country } = require("../db");

const getActivities = async (req, res) => {
  console.log("activities::::::::::");
  
  try {
    const activities = await Activity.findAll({
      // include: Country, //incluye el pais al que pertenece la actividad
    });

    console.log(activities);
    res.status(200).send(activities);

  } catch (error) {
    
    console.log("ERRRo::::::::::");
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getActivities };
