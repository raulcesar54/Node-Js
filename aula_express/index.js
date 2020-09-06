const express = require('express') //importando express
const { request, response } = require('express')
const app = express() // estanciando o express para o app

// toda rota nescessita de uma resposta 
app.get('/', (request,response)=> response.send('Bem vindo ao express 😘😘😘'))
app.get('/blogs',(request,response)=>response.send('Bem vindo ao blog 📖📚📕'))

// parametors de rota com node 
// /blog/Ola Mundo
app.get('/blog/:artigo', (request, response) =>{
    let artigo = request.params.artigo
    return response.send(`Você esta lendo o artigo ${artigo}`)
})
// parametros em rota
app.get('/blog/:artigo/:sessao?', (request, response) =>{
    const {artigo, sessao} = request.params
    return response.send(`Você esta lendo o artigo ${artigo} sessão ${sessao}`)
})
// buscando query params 
app.get('/blog', (request,response)=>{
    let artigo = request.query.teste
    return response.send(`Você esta lendo o artigo ${artigo}`)
    
})



app.listen(4000, error => {
    console.log(error ? 'Ocorreu um erro na inicialização!😢' : 'Servidor rodando com sucesso 🎉')
})