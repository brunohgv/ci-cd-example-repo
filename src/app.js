const express = require('express')
const app = express()

app.get('/greetings/:name', (req, res) => {
    return res.json({message: `Hello ${req.params.name}!`})
})

module.exports = app;
