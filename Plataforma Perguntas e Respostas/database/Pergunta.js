const sequelize = require('sequelize')
const conexao = require('./database')

const Pergunta = conexao.define('pergunta', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }
})
Pergunta.sync({ force: false }).then(res => console.log('Tabela criada com sucesso 🙌'))

module.exports  = Pergunta;
