import { body } from "express-validator";
import { validationResultExpress } from "../../../../../express/validator/ValidationMiddleware";

export const clientBodyValidation = [
    body('type')
        .exists().withMessage("El campo 'type' es obligatorio"),
        
    body('docnumber')
        .exists().withMessage("El campo 'docnumber' es obligatorio").bail()
        .escape()
        .isString()
        .isLength({max: 45}).withMessage("Ingrese un numero de documento valido"),
    
    body('name')
        .exists().withMessage("El campo 'name' es obligatorio").bail()
        .isString()
        .isLength({max: 45}).withMessage("Ingrese un nombre válido"),

    body('lastname')
        .exists().withMessage("El campo 'lastname' es obligatorio").bail()
        .isString()
        .isLength({max: 45}).withMessage("Ingrese un apellido válido"),

    body('birth')
        .exists().withMessage("El campo 'birth' es obligatorio").bail()
        // .custom(
   
        // ).withMessage("Ingrese una fecha válida")
        .isLength({max: 45}).withMessage("Ingrese una fecha válida"),

    validationResultExpress
];