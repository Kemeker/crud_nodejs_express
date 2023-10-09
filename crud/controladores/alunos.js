let {alunos} = require("../db.js")

function buscarAluno(req, res) {
    return res.status(200).json(alunos)
    
}

function criarAluno(req, res){
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

    // buscando aluno com mesmo email   
    const emailExistente = aluno.find((aluno)=> aluno.email === email && aluno.id !== Number(id))
    
    // verificando se email ja existe
    if (emailExistente){
        //devolvendo resposta ao cliente
        return res.status(400).json({mensagem: "Email ja existe"})
    }

    // alterando o aluno
    alunos = alunos.map((aluno) => {
        if (Number(id) === aluno.id) {
            return {
                id: Number(id),
                nome,
                email,
                senha,
            }
    } else {
      return aluno;
    }
  })

  

    // devolvendo resposta de sucesso
    return res.status(204).send()
}

function deleteAluno(req, res){
    // pegando o id dos parametros
    const {id} = req.params

    //buscando o index ( indice) do aluno
    const alunoIndex = aluno.findIndex((aluno)=> aluno.id === Number(id))

    // verificando se o aluno existe
    if (alunoIndex == -1){
        // devolvendo resposta de erro ao cliente
        return res.status(400).json({mensagem: "Aluno nao encontrado"})
    }

    // removendo aluno de alunos
    aluno.splice(alunoIndex, 1)

    //devolvendo a resposta de sucesso
    return res.status(204).send()
}

// exportando as funçoes controladoras

module.export = {
    buscarAluno
    criarAluno
    alterarAluno
    deleteAluno
}
