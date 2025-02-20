const fs = require("fs")
const { getTodosLivros } = require("./livro")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function insereFavorito(id) {
    const livros = getTodosLivros()
    const favoritos = getTodosFavoritos()

    const livroFiltrado = livros.find(livro => livro.id === id)
    const novaListaDeFavoritos = [...favoritos, livroFiltrado]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

function deletaFavoritoPorId(id) {
    const livros = getTodosFavoritos()
    const livrosFiltrado = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrado))
}

module.exports = {
    getTodosFavoritos, 
    deletaFavoritoPorId,
    insereFavorito
}