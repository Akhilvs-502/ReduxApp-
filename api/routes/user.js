import express from "express";
import { userTest } from "../controller/userContoller.js";
const router=express.Router()
router.get("/",userTest)

export default router