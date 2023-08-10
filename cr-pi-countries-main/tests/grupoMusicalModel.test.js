// grupoMusicalModel.test.js

const grupoMusicalModel = require("../exercises/grupoMusicalModel");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "databases/grupoMusical-model.sqlite",
});

grupoMusicalModel(sequelize);
const { GrupoMusical } = sequelize.models;
const attributes = GrupoMusical.getAttributes();
console.log(attributes);

describe("El modelo GrupoMusical", () => {
  it("Debe haber sido creado correctamente y con el nombre correcto", () => {
    expect(GrupoMusical).toBeDefined();
  });

  it("No debe generar automáticamente los atributos createdAt y updatedAt", () => {
    expect(attributes["createdAt"]).not.toBeDefined();
    expect(attributes["updatedAt"]).not.toBeDefined();
  });

  describe("Los atributos del modelo...", () => {
    it("id: Un identificador único de tipo entero, con incremento automático y clave primaria.", () => {
      expect(attributes.id.type instanceof DataTypes.INTEGER).toBe(true);
      expect(attributes.id.primaryKey).toBe(true);
      expect(attributes.id.autoIncrement).toBe(true);
    });

    it("nombre: El nombre del grupo musical, de tipo cadena de texto y no puede ser nulo.", () => {
      expect(attributes.nombre.type instanceof DataTypes.STRING).toBe(true);
      expect(attributes.nombre.allowNull).toBe(false);
    });

    it("genero: El género musical del grupo, de tipo cadena de texto y puede ser nulo.", () => {
      expect(attributes.genero.type instanceof DataTypes.STRING).toBe(true);
      expect(
        attributes.genero.allowNull == true ||
          attributes.genero.allowNull == undefined
      ).toBe(true);
    });

    it("numeroIntegrantes: El número de integrantes del grupo, de tipo entero y puede ser nulo. Debe tener un valor mínimo de 1.", () => {
      expect(
        attributes.numeroIntegrantes.type instanceof DataTypes.INTEGER
      ).toBe(true);
      expect(
        attributes.numeroIntegrantes.allowNull == true ||
          attributes.numeroIntegrantes.allowNull == undefined
      ).toBe(true);
      expect(attributes.numeroIntegrantes.validate).toEqual({ min: 1 });
    });

    it("fechaFormacion: La fecha de formación del grupo, de tipo fecha sin hora y puede ser nulo.", () => {
      expect(attributes.fechaFormacion.type instanceof DataTypes.DATEONLY).toBe(
        true
      );
      expect(
        attributes.fechaFormacion.allowNull == true ||
          attributes.fechaFormacion.allowNull == undefined
      ).toBe(true);
    });

    it("discografia: La discografía del grupo, de tipo cadena de texto y puede ser nulo.", () => {
      expect(attributes.discografia.type instanceof DataTypes.STRING).toBe(
        true
      );
      expect(
        attributes.discografia.allowNull == true ||
          attributes.discografia.allowNull == undefined
      ).toBe(true);
    });

    it("activo: Un indicador booleano que indica si el grupo está activo, con valor predeterminado en true y no puede ser nulo.", () => {
      expect(attributes.activo.type instanceof DataTypes.BOOLEAN).toBe(true);
      expect(attributes.activo.defaultValue).toBe(true);
      expect(attributes.activo.allowNull).toBe(false);
    });
  });
});
