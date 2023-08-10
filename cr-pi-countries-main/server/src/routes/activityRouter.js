const { Router } = require("express");
const { getAllActivitiesHandler, postActivityHandler} = require("../handlers/activityHandlers");

const activityRouter = Router();


//! Busca TODAS las Actividades
activityRouter.get("/", getAllActivitiesHandler );

//? Crea una Actividad nueva
activityRouter.post("/", postActivityHandler); 

module.exports = activityRouter;
