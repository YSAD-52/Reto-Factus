import Router from "router";
const router = Router()
import { postInvoice } from "../controllers/invoices.js";


router.post("/", postInvoice)



export default router