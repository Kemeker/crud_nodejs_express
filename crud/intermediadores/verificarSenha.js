function verificarSenha(req, res, next){
    // pega a senha da query
    const {senha } = req.query

    // verifica se a senha passada e diferente da senha correta
    if (senha !== '1234'){
        // devolvendo resposta de erro para o cliente
        return req.status(401).json({mensagem: "senha incorreta"})
    }

    // avança para as funçoes controladoras
    next()
}

// exportando funcao verificadora
module.export = {
    verificarSenha,
}