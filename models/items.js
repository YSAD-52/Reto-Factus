import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    code_reference: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    discount_rate: { type: Number, required: true },
    price: { type: Number, required: true },
    tax_rate: { type: String, required: true },
    unit_measure_id: { type: Number, required: true },
    standard_code_id: { type: Number, required: true },
    is_excluded: { type: Number, required: true },
    tribute_id: { type: Number, required: true },
    withholding_taxes: [
        { 
            code: { type: String, required: true },
            withholding_tax_rate: { type: String, required: true },
        },
    ],
});

export default mongoose.model("items" , itemsSchema)