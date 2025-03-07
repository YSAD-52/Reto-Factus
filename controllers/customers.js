import customerModel from '../models/customers.js'

const postCustomer = async (req, res)=>{
  try {
    const {identification, dv, company, trade_name, names, address, email, phone, legal_organization_id, tribute_id, identification_document_id, municipality_id}= req.body

    const customer = new customerModel({
        identification, dv, company, trade_name, names, address, email, phone, legal_organization_id, tribute_id, identification_document_id, municipality_id
    })
    await customer.save()
    res.json(customer)
  } catch (error) {
    res.status(400).json({error:"customer register failed"})
    console.log(error);
  }
}


const getCustomers = async (req,res)=>{
try {
  const customers = await customerModel.find()
  res.json({customers})
} catch (error) {
  res.status(400).json({error:"Customer search failed"})
  console.log(error);
}
}

export{
    postCustomer,
    getCustomers
}