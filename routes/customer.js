import Router from "router";
const router= Router()

import { postCustomer ,getCustomers } from "../controllers/customers.js";

// customer record
router.post("/", postCustomer)

// find customers
router.get("/customers" ,getCustomers)

export default router;