const https = require("http");
const app = require("./app");
const port = process.env.PORT || 9000;
const server = https.createServer(app);
const { dbConnect } = require("./helper/dbConnection");
const { createSuperAdmin } = require("./createSuperAdmin");

dbConnect().then((_) => {
  createSuperAdmin();
  server.listen(port, (_) => console.log(`Server is Running on port ${port}`));
});
