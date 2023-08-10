const { Router } = require("express");
const { getCountriesHandler, getCountryHandler} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

//? Trae un Pais con Id por params
countriesRouter.get("/:idCountry", getCountryHandler);

//? Trae TODOS los Paises, o por Query
countriesRouter.get("/", getCountriesHandler);


module.exports = countriesRouter;
