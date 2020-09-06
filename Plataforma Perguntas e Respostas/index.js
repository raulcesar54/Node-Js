const express = require('express');
const body = require('body-parser');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta')
// database connection 
connection.authenticate().then(res => console.log('autenticado no banco')).catch(res => console.log('erro ao conectar com banco'))
// setando o ejs como view engine 
// app.set('view engine', 'ejs')
// arquivos estaticos, como CSS, js, e imagems
app.use(express.static('public'))
// decodificar dados enviados pelo formulario
app.use(bodyParser.urlencoded({ extended: false }))
// converte dados do formulario para json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true }).then(resposta => {
        res.json({ resposta })
    })
})
app.post('/salvar_dados', (req, res) => {
    let { titulo, descricao } = req.body;
    // salva os dados na tabela, equivale ao insert 
    Pergunta.create({ titulo, descricao }).then(() => {
        res.json({ titulo, descricao })
    })
})


app.listen(8001, error => console.log('Servidor rodando '))