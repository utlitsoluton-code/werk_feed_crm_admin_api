const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { basePath, baseRouter } = require("./helper/routeHandler");
const cors = require("cors");
const helmet = require("helmet");
var cookieParser = require("cookie-parser");
const CORS = process.env.NODE_ENV === 'production' ? process.env.HOST : '*'

app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", CORS);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-typeAccept, Authorization,authKey"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use("/static", express.static(path.join(__dirname, "public")));

// app.get('/', (req,res)=> {
//   res.send('<h1>Server is running...</h1>')
// })

app.use(express.static(path.join(__dirname, 'public/dist')));

// // Handle all other routes by serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dist', 'index.html'));
});

const crypto = require('crypto');

app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;
  res.setHeader("Content-Security-Policy", `script-src 'self' 'nonce-${nonce}'`);
  next();
});
app.use(basePath, baseRouter);
app.use((req, res, next) => {
  const error = new Error("route Not found..");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

module.exports = app;
