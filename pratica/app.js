const express = require('express');
const body_parser = require('body-parser');
const app = express();
const conection = require('./database/database')
app.use(body_parser.urlencoded({ extended:false }))
app.use(body_parser.json())
app.get('/', (req, res) => {
    res.send('ola')
})
app.post('/adicionar_cliente', (req, res) => {
    
    res.json(req.body)
})


app.listen(8001, res => console.log('servidor rodando com sucesso'))