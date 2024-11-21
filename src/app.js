import express from 'express' //importa express
const app = express() //cria instancia express

// indicar para o express ler body com json
app.use(express.json())

// mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req, res) => { //cria rota padrão
    res.send('Curso de nodejs!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes) //exibindo status code
})

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app





