require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('connected to db'))

const PORT = process.env.PORT || 4000;

const app = express()


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
})

app.listen(PORT, () => {
    console.log("\x1b[34m", `listening on ${PORT}`);
})