const express = require("express");
// const cors = require("cors");
const app = express();
const db = require("./src/models");

let corsOptions = ["http://localhost", "http://localhost:8082"];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (corsOptions.indexOf(origin) === -1) {
//         return callback(
//           new Error(`La politica de CORS para esta url no permite el acceso`),
//           false
//         );
//       }
//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

require("./src/routes/Usuarios.routes")(app);
const PORT = 8081;

db.sequelize.sync({ force: false }).then(() => {
  console.log("sequelize ..... db");
});

const server = app.listen(PORT, function () {
  let host = server.address().address;
  console.log("SERVIDOR BACKEND EN http://%s:%s", host, PORT);
});
 