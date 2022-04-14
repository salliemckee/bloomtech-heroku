const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", async (req, res, next) => {
  res.json(process.env.MESSAGE);
});

module.exports = server;
