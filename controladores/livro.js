const { getTodosLivros, getLivroPorId, InsereLivro, ModificaLivro, ExcluirLivro } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
};

function getLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        }else {
            res.status(422)
            res.send("Id Inválido!")
        }

    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
};

function postLivro (req, res) {
    try {
        const livroNovo = req.body

        if(livroNovo.nome && livroNovo.id) {
            InsereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com Sucesso!") 
        }else {
            if(!livroNovo.nome){
                res.status(422)
                res.send("O campo nome é obrigatório!")
            }else if (!livroNovo.id) {
                res.status(422).send("O campo id é obrigatório!");
            }     
        }       
    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            ModificaLivro(body, id)
            res.send("Item modificado com sucesso!")
        }else {
            res.status(422)
            res.send("Id Inválido!")
        }

    } catch (e) {
        res.status(500)
        res.send(e.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            ExcluirLivro(id)
            res.send("Item excluído com sucesso!")
        }else {
            res.status(422)
            res.send("Id Inválido!")
        }
        
    } catch (e) {
        e.status(500)
        res.send(e.message)
    }
}
 
module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}
    

