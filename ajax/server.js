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

//app.listen(3000, () => console.log('Executando...'))

const multer = require('multer')

const storage = multer.diskStorage({    
        destination: function (req, file, callback) {
            callback(null, './upload')
        }, 
        filename: function (req, file, callback){
            callback(null, `${Date.now()}_${file.originalname}`)
        }
    }
)

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            return res.end('Ocoreu um erro no envio do arquivo...')
        }
        else{  
        res.end('Concluido com Sucesso!')
    }
    }
    ) 
}
)
app.listen(3000, () => console.log('Executando...'))
