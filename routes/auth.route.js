import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {body} from 'express-validator';
import { validationResultExpress } from "../middlewares/validationsResultExpress.js";

const router = express.Router();

router.post('/register',[
    body('email', "wrong email format")
    .trim()
    .isEmail().normalizeEmail(),
    body("password","Min 6 characters").trim().isLength({min:6}),
    body('password',"wrong password format")
    .trim()
    .isLength({min:6})
    .custom((value,{req})=>{
        if(value != req.body.repassword){
            throw new Error('passwords do not match')
        }
        return value;
    })
], validationResultExpress, register);
router.post('/login',[
    body('email',"wrong email format")
    .trim()
    .isEmail().normalizeEmail(),
    body("password","Min 6 characters").trim().isLength({min:6}),
],validationResultExpress, login);

export default router;