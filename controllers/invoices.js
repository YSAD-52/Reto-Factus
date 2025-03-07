import invoicesModel from "../models/invoices.js";
import axios from "axios";

const postInvoice = async (req, res) => {
    const token = req.headers.token
    let response = ""
    try {
        if(!token){
            throw new Error ("no hay token")
        }

        const {
            numbering_range_id,
            reference_code,
            observation,
            payment_form,
            payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items,
        } = req.body;


        const facturaValidada = await axios.post(
            process.env.URL_API,
            {
                numbering_range_id,
                reference_code,
                observation,
                payment_form,
                payment_due_date,
                payment_method_code,
                billing_period,
                customer,
                items,
            },
            {
                headers: { Authorization: `Bearer ${token}`},
            }
        );

            response = facturaValidada.data.data.bill.number

        const invoice = new invoicesModel ({
            numbering_range_id,
            reference_code,
            observation,
            payment_form,
            payment_due_date,
            payment_method_code,
            billing_period,
            customer,
            items,
            cufe: response.bill.cufe
        });
        await invoice.save()
        res.json({facturaValidada: invoice})
        console.log("exito!");


    } catch (error) { 
        res.status(400).json({error:"invoice register failed"})
        console.log("response", response);
    }
};


export { postInvoice}