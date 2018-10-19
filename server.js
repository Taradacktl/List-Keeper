const express = require('express');

const app = express();

app.get('/board', (req, res) => {
    res.json({
        lists: [{
            title: 'To do list',
            items: [{
                text: 'Laundry'
            }, {
                text: 'Vacuum'
            }]
        }, {
            title: 'Gifts list for Christmas',
            items: [{
                text: 'Susie-Scarf'
            }, {
                text: 'John-Slippers'
            }]
        }]
    });
});

app.listen(8080);
