const { Country , Activity} = require("../db");

const getAllCountries = async (req, res) => {
  
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
      include: {
        model: Activity,
        as: "activities",
        attributes: ["name", "difficulty", "duration", "season", "countries"],
      },
    });
    console.log(allCountries);
    // return allCountries;
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllCountries };
