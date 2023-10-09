// importando o express
import express = require("express")
import {alunos} = require("./db.js")
const {rotas} = require("./rotas.js")

// executando express
const app = express()

// definindo o tipo dos dados de entrada e saida no formato JSON
app.use(express.json())

// usando as rotas
app.use(rotas)

// defina a porta que o servidor vai rodar
app.listen(3000, () =>{
    consle.log("servidor rodando na porta 3000")
})