const express = require('express');
const body = require('body-parser');
const bodyParser = require('body-parser');

const app = express();


// setando o ejs como view engine 
app.set('view engine', 'ejs')
// arquivos estaticos, como CSS, js, e imagems
app.use(express.static('public'))
// decodificar dados enviados pelo formulario
app.use(bodyParser.urlencoded({ extended: false }))
// converte dados do formulario para json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    let nome = 'raul cesar'
    let lang = 'javascript'
    res.render('index', { nome, lang })
})
app.post('/salvar_dados', (req, res) => {
    const {pergunta, descricao} = req.body
    res.send(`pergunta: ${pergunta} descrição:${descricao}`)
})
app.listen(8001, error => console.log('Servidor rodando '))