import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler.js";

// Importar rutas
import productRoutes from "./routes/Product.routes.js";

// Crear aplicación
const app = express();

/* ===========================
   MIDDLEWARES
=========================== */

// Permitir peticiones desde otros dominios
app.use(cors());

// Mostrar las peticiones en la consola
app.use(morgan("dev"));

// Permitir recibir datos en formato JSON
app.use(express.json());

// Permitir recibir datos desde formularios
app.use(express.urlencoded({ extended: true }));

/* ===========================
   RUTAS
=========================== */

// Ruta principal
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 API funcionando correctamente",
  });
});

// Rutas del CRUD
app.use("/api/products", productRoutes);

/* ===========================
   RUTA NO ENCONTRADA
=========================== */

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
  });
});

// Middleware global para manejo de errores
app.use(errorHandler);

export default app;
