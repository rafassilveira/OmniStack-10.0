const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-se1sy.mongodb.net/wek10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET,POST,PUT,DELETE

// Tipos de parametros:
// query Params: request.query (Filtros,ordenação, pagiação)
// Route Params:request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não relacional)

app.listen(3333);
