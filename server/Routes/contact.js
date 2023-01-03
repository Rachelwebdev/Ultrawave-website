import express from "express";

import { customerContact } from "../Controllers/contact.js";
const router = express.Router();

router.post("/contact",customerContact);


export default router;