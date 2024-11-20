import app from './src/app.js'

const PORT = 3000 //definir porta padrão

// escutar a porta 3000
app.listen(PORT, () => { //escutar as requisões que estão sendo feitas para aquela porta
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
}) 