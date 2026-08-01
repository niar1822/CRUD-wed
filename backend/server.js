import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Cargar variables de entorno
dotenv.config();

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Iniciar servidor
app.listen(PORT, () => {
  console.log("==================================");
  console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("==================================");
});
