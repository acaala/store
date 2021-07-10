require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to db'))

const PORT = process.env.PORT || 4000;

const app = express()


app.get("/api/v1", (req, res) => {
    Product.find().then((result) => res.json( {products: result}));
})

app.get("/api/v1/create-product", (req, res) => {
    const product = new Product({
        name: 'Hammer',
        price: 4,
        body: 'Loreum Ipsum'
    })

    product.save().then(result => res.json({ product: `${result}`})).catch(err => console.log(err))
})

app.listen(PORT, () => {
    console.log("\x1b[34m", `listening on ${PORT}`);
})