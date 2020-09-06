const Sequelize = require('sequelize');

const connection = new Sequelize('perguntas','root','root',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;