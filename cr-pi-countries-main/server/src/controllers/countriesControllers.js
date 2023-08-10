const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getCountries = async () => {
  
  const allCountries = await Country.findAll({
    attributes: [ "id", "idCountry", "name",
      "capital", "population", "continent", "subregion", "area", "flags", ],
    include: Activity
    // {
    //       // model: Activity,
    //       // as: "activities",
    //       // attributes: ["name", "difficulty", "duration", "season"],
    //     },
      });

    return allCountries;
}

const getCountriesQuery  = async (name) => {
   
  const allCountries = await Country.findAll({
    attributes: ["id", "idCountry",
      "name", "capital", "population", "continent",
      "subregion", "area", "flags",
    ],
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
   
  return allCountries;
};

//! Busca el Pais por ID
const getCountryById = async (idCountry) => {
  idCountry = idCountry.toUpperCase();

  const myCountry = await Country.findOne({ where: { idCountry } , include: Activity});
  
  return myCountry;
};

module.exports = { getCountryById, getCountries, getCountriesQuery };
