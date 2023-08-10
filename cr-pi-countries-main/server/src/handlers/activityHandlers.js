// const { Activity, Country } = require("../db");
const { createActivity, getActivities } = require("../controllers/activityControllers");

const postActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || !countries)
      res.status(401).send("Missing data");

    let newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//! Busca TODAS LAS ACTIVIDADES o el Pais por ID
const getAllActivitiesHandler = async (req, res) => {
  try {
    const activities = await getActivities();

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postActivityHandler, getAllActivitiesHandler };
