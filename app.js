const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "XXXXXXX",
  user: "XXXXXXX",
  password: "XXXXXXXX",
  database: "XXXXXXXXX",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos.");
  }
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

app.get("/buscar", (req, res) => {
  const keyword = req.query.keyword;

  const query = `
      SELECT CodigoProducto, precio1, precio2, precio3, precio4, precio5, Subgrupo FROM productos
      WHERE CodigoProducto = ?
    `;

  db.query(query, [keyword], (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err);
      res.status(500).json({ error: "Error al buscar productos." });
    } else {
      res.json(results);
    }
  });
});

app.get("/filtrar", (req, res) => {
  const subgrupo = req.query.subgrupo;

  const query = `
    SELECT CodigoProducto, precio1, precio2, precio3, precio4, precio5, Subgrupo FROM productos
    WHERE Subgrupo = ?
  `;

  db.query(query, [subgrupo], (err, results) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err);
      res.status(500).json({ error: "Error al filtrar productos." });
    } else {
      res.json(results);
    }
  });
});

app.post("/actualizarPrecio", (req, res) => {
  const { codigoProducto, campoPrecio, nuevoPrecio } = req.body;

  const query = `
    UPDATE productos
    SET ${campoPrecio} = ?
    WHERE CodigoProducto = ?
  `;

  db.query(query, [nuevoPrecio, codigoProducto], (err, results) => {
    if (err) {
      console.error("Error al actualizar el precio:", err);
      res.status(500).json({ error: "Error al actualizar el precio." });
    } else {
      res.json({ message: "Precio actualizado exitosamente." });
    }
  });
});


const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor en funcionamiento en el puerto ${puerto}`);
});


