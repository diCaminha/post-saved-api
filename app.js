const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("first");
    next();
});

app.use((req,res, next) => {
    console.log("end");
    res.send("end here");
});

module.exports = app;