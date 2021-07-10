require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Product = require('../models/product');

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to db'))

const PORT = process.env.PORT || 4000;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get("/api/v1", (req, res) => {
    Product.find().then((result) => res.json( {products: result}));
})

app.post("/api/v1/create-product", (req, res) => {
    
    const product = new Product(req.body.newProduct);

    product.save().then(result => res.json({ product: `${result}`, redirect: '/' })).catch(err => console.log(err))
    
    
})


app.listen(PORT, () => {
    console.log("\x1b[34m", `listening on ${PORT}`);
})