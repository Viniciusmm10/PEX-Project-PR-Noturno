const connection = require("../database/database");

const Quiz = {
    Perguntas,
    Alternativas,
    Perguntas_Aleatorias
}

function Perguntas(){

return new Promise((res, rej) => {
    connection
        .query(`SELECT
                    p.idpergunta,
                    p.pergunta
                FROM quiz.perguntas AS p;`, { raw: true })
        .then(results => {
            res(results[0])
        })
        .catch(results => {
            rej(results)
        })
    })
}
    
function Alternativas(){

return new Promise((res, rej) => {
    connection
        .query(`SELECT 
                    a.pergunta_idpergunta, 
                    a.alternativa 
                FROM quiz.alternativas AS a;`, { raw: true })
        .then(results => {
            res(results[0])
        })
        .catch(results => {
            rej(results)
        })
    })
}


async function Perguntas_Aleatorias(min, max, qtd){
    const perguntas = await Perguntas();
    let perguntas_embaralhadas = [];

    idsAleatorios(min, max, qtd).forEach(id => {
      perguntas_embaralhadas.push(perguntas.find(p => p.idpergunta == id))
    })

    return new Promise((res, rej) => {
        res(perguntas_embaralhadas)
    })
}


// Funções auxiliares

function aleatorioEntre(min, max){
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

function idsAleatorios(min, max, qtd){
    let ids = new Set();
    do
    {
      ids.add(aleatorioEntre(min, max))
    } 
    while (ids.size !== qtd)
  
    return ids;
}





module.exports = Quiz