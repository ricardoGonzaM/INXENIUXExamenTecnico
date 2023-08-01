import express from "express";
import cors from "cors";
// importacion de la base de datos
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
} catch (error) {
  console.error("El error de la conexión es:", error);
}

app.listen(8000, () => {
  console.log("Server Up running in http://localhost:8000/");
});
