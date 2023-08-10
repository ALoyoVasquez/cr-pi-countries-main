const {
  getCountries,
  getCountryById,
  getCountriesQuery,
} = require("../controllers/countriesControllers");

//!Trae todos los Paises o los trae por query
const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    let countries =  !name ? await getCountries() : await getCountriesQuery(name);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//! Busca el Pais por ID
const getCountryHandler = async (req, res) => {
  let { idCountry } = req.params;
  try {
    const countrie = await getCountryById(idCountry);
    res.status(200).json(countrie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountryHandler, getCountriesHandler };
