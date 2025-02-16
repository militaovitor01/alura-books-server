const fileSystem = require("fs")

const dadosAtuais = JSON.parse(fileSystem.readFileSync("livros.json"))
const novoDado = {id: '3', nome: 'Livro mais que demais' }

fileSystem.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fileSystem.readFileSync("livros.json")))