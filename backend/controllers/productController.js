const Product = require('../models/product');

const product_index = (req, res) => {
    Product.find().then((result) => res.json({ products: result }))
}

const product_create = (req, res) => {
    const product = new Product(req.body.newProduct);

    product.save().then(result => res.json({ product: result, redirect: '/' })).catch(err => console.log(err))
}

const product_details = (req, res) => {
    const id = req.params.id;
    Product.findById(id).then((result) => {
        res.json({ product: result })
    }).catch(err => console.log(err))
}

const product_delete = (req, res) => {
    const id = req.params.id;

    Product.findByIdAndDelete(id).then(result => res.json({ redirect: "/" }))
}

module.exports = {
    product_index,
    product_create,
    product_details,
    product_delete
}