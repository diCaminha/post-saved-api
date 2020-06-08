const express = require('express');

const app = express();

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header","Origin, X-requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/posts',(req, res, next) => {
    console.log("getting posts...");
    const posts = [
        {
            id: '1223dedef',
            title: 'Java API',
            link: 'http://javaapi.com'
        },
        {
            id: '5t55g5tbgt4',
            title: 'Globo Esporte',
            link: 'http://globoesporte.com'
        }
    ];

    res.status(200).json({
        message: 'post sent successfuly!',
        posts: posts
    });
});

module.exports = app;