const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  // server.use("/countries", mainRouter);
server.use(mainRouter);

module.exports = server;
