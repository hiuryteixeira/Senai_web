const url = 'https://dados.ifpb.edu.br/dataset/26d67876-0cb2-41a4-83ed-7bde06eb736c/resource/0d03ee6a-2af1-4dde-9b3d-90419c48fabe/download/servidores.json'

// instalar biblioteca axios

const axios = require('axios')

// axios.get(url).then(resposta => {
//     const servidores = resposta.data
//     console.log(servidores)
// })

const cargo = f => f.cargo_emprego === 'CONTADOR' // filtar por contador
const situacao = f => f.situacao.nome === 'APOSENTADO' // O IGUAL E EXATAMENTE IGUAL  FILTRA APOSENTADO
const jornada = f => f.jornada_trabalho === '40 HORAS SEMANAIS'
const matricula = f => f.matricula >= 27000 

// const sigla = f => f.sigla === 'PRAF-RE'

// axios.get(url).then(resposta =>{
//     const servidores = resposta.data
//     const resultado_filtro = servidores.filter(sigla)
//     console.log(resul)
// })

axios.get(url).then(resposta => {
    const servidores = resposta.data
    const resultado_filtro = servidores.filter(cargo).filter(situacao).filter(jornada).filter(matricula)
    console.log(resultado_filtro)
})