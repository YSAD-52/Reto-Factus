import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import customerRouter from './routes/customer.js'
import itemRouter from './routes/items.js'
import invoiceRouter from './routes/invoices.js'


const app= express()
app.use(cors())
app.use(express.json())

app.use("/factus/customer", customerRouter)
app.use("/factus/item", itemRouter)
app.use("/factus/invoice", invoiceRouter)




dotenv.config()


app.listen(process.env.PORT,()=>{
    console.log("Escuchando en el puerto" , process.env.PORT);
    mongoose.connect(process.env.CNX_MONGO)
    .then(()=>console.log("conected"))
    .catch((error)=>console.log(error))
})