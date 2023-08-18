const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

const { getApi } = require('./src/controllers/getApiInfo');


// sincroniza

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
  // getApi()
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
