let {alunos} = require("../db.js")

function buscarAlunos(req, res) {
    return res.status(200).json(alunos)
    
}

function criarAlunos(req, res){
    // pegando os dados no body
    const {nome, email, senha} = req.body

    // verificando se os dados existem
    if (!nome || !email || !senha) {
        // devolvendo a resposta ao cliente
        return res.status(400).json({mensagen: "Todos os campos devem ser preenchidos"})
        
    }

    // verificando se o email ja existe
    const emailExistente = alunos.find((aluno)=> alunos.email === email)
    if (emailExistente){
        // devolvendo a resposta ao cliente
        return res.status(400).json({mensagem: "Email ja existe"})

    }

    // pegando o ultimo id cadastrado
    const ultimoId = alunos.reduce((acc, aluno)=> acc > aluno.id ? acc : aluno.id)

    // adicionando no array alunos o novo aluno
    alunos.push({id: ultimoId + 1, nome, email, senha})

    // devolvendo resposta de sucesso
    return res.status(201).send()
}

function alterarAluno(req, res){
    // pegando os dados no body
    const {nome, email, senha} = req.body

    // pegando id dos parametros
    const {id} = req.params

    // verificando se o aluno existe
    let alunoExiste = alunos.find((aluno)=> aluno.id === Number(id))

    // devolvendo a resposta de erro ao cliente
    return res.status(400).json({mensagem: "Aluno nao encontrado" })

    // verificando se os dados existem
    if (!nome || !email || !senha){
        // devolvendo a resposta de erro ao cliente
        return res.status(400).json({mensagem: "Todos os campos devem ser preenchidos"})

    const email    
    }