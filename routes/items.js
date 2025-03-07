import Router from "router";
const router = Router()

import { postItems, getItems } from "../controllers/items.js";


//item record

router.post("/",postItems)

// items find
router.get("/items" , getItems)

export default router