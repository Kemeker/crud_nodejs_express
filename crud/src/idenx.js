// importando os modulos 
const {alunos} = require("./db")
const {rotas} = require("./rotas")
const express = require('express')

// executando express
const app = express()

// definindo o tipo dos dados de entrada e saida no formato JSON
app.use(express.json())

// usando as rotas
app.use(rotas)

// defina a porta que o servidor vai rodar
app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000")
})