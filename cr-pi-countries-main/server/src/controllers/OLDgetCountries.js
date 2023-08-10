const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
  const { name } = req.query;

  // console.log(`NAME: ${name}`);
  if (!name) {
    
    try {
      const allCountries = await Country.findAll({
        attributes: [
          "id",
          "idCountry",
          "name",
          "capital",
          "population",
          "continent",
          "subregion",
          "area",
          "flags",
        ],
        // include: {
        //   model: Activity,
        //   as: "activities",
        //   attributes: ["name", "difficulty", "duration", "season"],
        // },
      });
      res.status(200).send(allCountries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    try {
      const allCountries = await Country.findAll({
        attributes: [
          "id",
          "idCountry",
          "name",
          "capital",
          "population",
          "continent",
          "subregion",
          "area",
          "flags",
        ],
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
      res.status(200).send(allCountries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = { getCountries };
