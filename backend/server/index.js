const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express()


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
})

app.listen(PORT, () => {
    console.log("\x1b[34m", `listening on ${PORT}`);
})