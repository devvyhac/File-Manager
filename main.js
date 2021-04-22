const mongoose = require('mongoose');
const app = require('express')();

app.get('/api', (req, res) => {
    res.send("Hello, World");
});

app.listen(3000, () => console.log("Server Running"));

