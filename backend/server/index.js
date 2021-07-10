require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require("../routes/productRoutes")

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to db'))

const PORT = process.env.PORT || 4000;

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// product routes
app.use("/api/v1", productRoutes)

app.listen(PORT, () => {
    console.log("\x1b[34m", `listening on ${PORT}`);
})