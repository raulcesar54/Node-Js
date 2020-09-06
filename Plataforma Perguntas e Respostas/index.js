const express = require('express');
const app = express();
// setando o ejs como view engine 
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let nome = 'raul cesar'
    let lang = 'javascript'

    res.render('index', { nome, lang })
})
app.listen(8001, error => console.log('Servidor rodando '))