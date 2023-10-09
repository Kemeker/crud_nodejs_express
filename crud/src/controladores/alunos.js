// Importando os módulos corretamente
const { alunos } = require("../db");

function buscarAluno(req, res) {
    return res.status(200).json(alunos);
}

function criarAluno(req, res) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos devem ser preenchidos" });
    }

    const emailExistente = alunos.find((aluno) => aluno.email === email);
    if (emailExistente) {
        return res.status(400).json({ mensagem: "Email já existe" });
    }

    const ultimoId = alunos.reduce((acc, aluno) => (acc > aluno.id ? acc : aluno.id), 0);

    alunos.push({ id: ultimoId + 1, nome, email, senha });

    return res.status(201).send();
}

function alterarAluno(req, res) {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    const alunoExiste = alunos.find((aluno) => aluno.id === Number(id));
    if (!alunoExiste) {
        return res.status(400).json({ mensagem: "Aluno não encontrado" });
    }

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos devem ser preenchidos" });
    }

    const emailExistente = alunos.find((aluno) => aluno.email === email && aluno.id !== Number(id));
    if (emailExistente) {
        return res.status(400).json({ mensagem: "Email já existe" });
    }

    alunos = alunos.map((aluno) => {
        if (Number(id) === aluno.id) {
            return {
                id: Number(id),
                nome,
                email,
                senha,
            };
        } else {
            return aluno;
        }
    });

    return res.status(204).send();
}

function deleteAluno(req, res) {
    const { id } = req.params;
    const alunoIndex = alunos.findIndex((aluno) => aluno.id === Number(id));

    if (alunoIndex === -1) {
        return res.status(400).json({ mensagem: "Aluno não encontrado" });
    }

    alunos.splice(alunoIndex, 1);

    return res.status(204).send();
}

// Exportando as funções controladoras corretamente
module.exports = {
    buscarAluno,
    criarAluno,
    alterarAluno,
    deleteAluno,
};
