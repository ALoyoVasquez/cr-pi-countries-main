const { Sequelize, DataTypes } = require("sequelize");
const createCountries = require("../exercises/createDoctors");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

const pais = [
  { id: 'VEN', 						name: 'Venezuela', 	
	capital: 'Caracas',				continents: "South America",	
	subregion: "South America",		area: 	2780400,
	population: 28435943,			flags: 'https://flagcdn.com/w320/ve.png'},
  { id: 'ARG', 						name: 'Argentina', 	
	capital: 'Buenos Aires',		continents: "South America",	
	subregion: "South America",		area: 	916445,
	population: 45376763,			flags:  "https://flagcdn.com/w320/ar.png"},
  { id: 'GER', 						name: 'Germany', 	
	capital: 'Berlin',				continents: "Europe",	
	subregion: "Western Europe",	area: 	357114,
	population: 83240525,			flags: "https://flagcdn.com/w320/de.png"},
];

beforeAll(async () => {
  sequelize.define(
    "Country",
    {
	  id: 			{ type: DataTypes.STRING(3), primaryKey: true },
      name: 		{ type: DataTypes.STRING },
      continents: 	{ type: DataTypes.STRING },
	  capital: 		{ type: DataTypes.STRING },
	  subregion: 	{ type: DataTypes.STRING },
	  area: 		{ type: DataTypes.INTEGER },
	  population: 	{ type: DataTypes.INTEGER },
	   flags: 		{ type: DataTypes.STRING },
    }
  );
  await sequelize.sync({ force: true });
  await createDoctors(sequelize, doctors);
});

describe("Para el modelo Doctor", () => {
  it("Deben haberse creado todos los registros/instancias correspondientes", async () => {
    const results = await sequelize.models.Doctor.findAll();
    expect(results).toHaveLength(3);
    expect(results.every((r) => r.name)).toBe(true);
    expect(results.every((r) => r.id)).toBe(true);
    expect(results.every((r) => r.area)).toBe(true);
    expect(results.some((r) => r.name === "Dr.Chapatín"));
    expect(results.some((r) => r.name === "Dr.Strange"));
    expect(results.some((r) => r.area === "Time Traveler"));
    expect(results.some((r) => r.area === "Queles"));
  });
});
