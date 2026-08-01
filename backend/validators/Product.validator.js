import { body } from "express-validator";

export const productValidator = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener mínimo 3 caracteres"),

  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => value >= 0)
    .withMessage("El precio no puede ser negativo"),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número positivo"),

  body("categoria")
    .optional()
    .isLength({ min: 3 })
    .withMessage("La categoría debe tener mínimo 3 caracteres"),
];
