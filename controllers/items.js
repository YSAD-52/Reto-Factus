import itemsModel from "../models/items.js";

const postItems = async (req, res) => {
    try {
        const {
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        } = req.body;

        const item = new itemsModel({
            code_reference,
            name,
            quantity,
            discount_rate,
            price,
            tax_rate,
            unit_measure_id,
            standard_code_id,
            is_excluded,
            tribute_id,
            withholding_taxes,
        });
        item.save()
        res.json({ item })
    } catch (error) {
        res.status(400).json({ error: "item register failed" })
        console.log(error);
    }
};



const getItems = async (req,res)=>{
    try {
        const items = await itemsModel.find();
        res.json({items})
    } catch (error) {
        res.status(400).json({error:"items search failed"})
        console.log(error);
    }
}



export {
    postItems,
    getItems
}
