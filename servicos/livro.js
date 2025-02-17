const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = getTodosLivros()
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    
    return livroFiltrado
}

function InsereLivro(livroNovo){
    const livros = getTodosLivros()
    const livrosAtualizados =[...livros, livroNovo]
    
    fs.writeFileSync("livros.JSON", JSON.stringify(livrosAtualizados))
}

function ModificaLivro(modificacoes, id) {
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro =>livro.id === id)

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function ExcluirLivro(id) {
    const livros = getTodosLivros()
    const livroFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    InsereLivro,
    ModificaLivro,
    ExcluirLivro
}