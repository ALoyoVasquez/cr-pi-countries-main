const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: { //Revisar
      type: DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
    }, // Dificultad del 1 al 5
    duration: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
      allowNull: false,
    }, // Duracion en Horas *
    season: {//spring, summer, fall, and winter //(Verano, Otoño, Invierno o Primavera)
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: false,
    }, 
    countries: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // allowNull: false
    }
  }, { timestamps: false });
};
