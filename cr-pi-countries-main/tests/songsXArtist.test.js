const { Sequelize, DataTypes } = require("sequelize");
const defineAsoc = require("../exercises/songsXArtist");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

sequelize.define("Song", {
  id: { primaryKey: true, type: DataTypes.INTEGER },
});

sequelize.define("Artist", {
  id: { primaryKey: true, type: DataTypes.INTEGER },
});

defineAsoc(sequelize);

const { Song, Artist } = sequelize.models;

describe("El modelo 'Song'", () => {
  it("Debe tener una relación con el modelo 'Artist'", () => {
    expect(Song.associations.Artist).toBeDefined();
  });
});
describe("El modelo 'Artist'", () => {
  it("Debe tener una relación con el modelo 'Song'", () => {
    expect(Artist.associations.Songs).toBeDefined();
  });
});
describe("La relación entre ambos modelos", () => {
  it("Debe ser de uno a varios", () => {
    expect(Artist.associations.Songs.associationType).toBe("HasMany");
    expect(Song.associations.Artist.associationType).toBe("BelongsTo");
  });
});
