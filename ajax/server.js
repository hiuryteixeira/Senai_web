const bodyParse = require('body-parser')

const express = require('express')
const app = express()


app.use(express.static('.'))
// dentro do diretorio atual sivar todos os aquivos estaticos.
app.use(bodyParse.urlencoded({extend: true}))
// usado para converter dados de formulário.

app.use(bodyParse.json())
//usado para transformar json em informações tratadas no servidor.

app.get('/teste', (req, res) => res.send('Acessando...'))

app.listen(3000, () => console.log('Executando...'))


