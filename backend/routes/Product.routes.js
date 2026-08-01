import { Router } from "express";

import {
  getProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  removeProduct,
} from "../controllers/Product.controller.js";

const router = Router();

/**
 * Obtener todos los productos
 * GET /api/products
 */
router.get("/", getProducts);

/**
 * Obtener un producto por ID
 * GET /api/products/:id
 */
router.get("/:id", getProduct);

/**
 * Crear un producto
 * POST /api/products
 */
router.post("/", createNewProduct);

/**
 * Actualizar un producto
 * PUT /api/products/:id
 */
router.put("/:id", updateExistingProduct);

/**
 * Eliminar un producto
 * DELETE /api/products/:id
 */
router.delete("/:id", removeProduct);

export default router;
