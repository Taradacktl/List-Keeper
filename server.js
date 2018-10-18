const express = require('express');

const app = express();

app.get('/board', (req, res) => {
    res.json({
        lists: [{
            title: 'To do list',
            items: [{
                text: 'Example item 1'
            }, {
                text: 'Example item 2'
            }]
        }, {
            title: 'Gift list',
            items: [{
                text: 'Example item 1'
            }, {
                text: 'Example item 2'
            }]
        }]
    });
});

app.listen(8080);
