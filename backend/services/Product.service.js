import Product from "../models/Product.model.js";

/**
 * Obtener todos los productos
 */
const getAllProducts = async () => {
  return await Product.find().sort({ createdAt: -1 });
};

/**
 * Obtener un producto por ID
 */
const getProductById = async (id) => {
  return await Product.findById(id);
};

/**
 * Crear un producto
 */
const createProduct = async (data) => {
  const product = new Product(data);

  return await product.save();
};

/**
 * Actualizar un producto
 */
const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

/**
 * Eliminar un producto
 */
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
