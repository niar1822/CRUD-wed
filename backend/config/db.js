import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("==================================");
    console.log("✅ Base de datos conectada");
    console.log("==================================");
  } catch (error) {
    console.error("==================================");
    console.error("❌ Error al conectar a MongoDB");
    console.error(error.message);
    console.error("==================================");

    process.exit(1);
  }
};

export default connectDB;
