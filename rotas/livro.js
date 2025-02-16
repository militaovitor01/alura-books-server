const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros) //req: request - res:response

router.post('/', (req, res) =>{
    res.send("Requisição do tipo POST")
})

router.patch('/', (req,res)=>{
    res.send("Requisição do tipo PATCH")    
})

router.delete('/', (req,res) =>{
    res.send("Requisição do tipo DELETE")
})

router.put('/', (req,res) =>{
    res.send("Requisição do tipo PUT")
})

module.exports = router
