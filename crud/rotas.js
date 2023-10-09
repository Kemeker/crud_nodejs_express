const express = require("express")
const {
    buscarlAluno,
    criarAluno,
    alterarAluno,
    deleteAluno,
} = require("./controladores/alunos")
const { verificarSenha} = require("./intermediadores/verificarSenha")

const rotas = express()

// criando a rota GET => buscar todos os alunos
// e executando a funçao controladora buscarAluno
rotas.get("/alunos", verificarSenha, buscarlAluno)

// criando a rota PUT => criar um novo aluno
// e executando a funçao controladora criarAluno
rotas.post("./alunos", criarAluno)

// criando a rota DELETE => deletar um aluno necessario passar o id
// e executar a funçao controladora aleterarAluno
rotas.delete("/alunos/:id", deleteAluno)

modeule.export = {
    rotas,
}