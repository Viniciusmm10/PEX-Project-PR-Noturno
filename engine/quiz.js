const connection = require("../database/database");

const Quiz = {
    Perguntas,
    Alternativas,
    Perguntas_Aleatorias
}

async function Perguntas(){

const result = await connection.query(
    `SELECT
        p.idpergunta,
        p.pergunta
    FROM quiz.perguntas AS p;`, 
    { raw: true }
)

return result[0]

}
    
async function Alternativas(){

const result = await connection.query(
    `SELECT 
        a.pergunta_idpergunta, 
        a.alternativa 
    FROM quiz.alternativas AS a;`, 
    { raw: true }
)

return result[0]

}


async function Perguntas_Aleatorias(min, max, qtd){

const perguntas = await Perguntas();

// let perguntas_embaralhadas = [];

// idsAleatorios(min, max, qtd).forEach(id => {
//     perguntas_embaralhadas.push(perguntas.find(p => p.idpergunta == id))
// })

let filtro = idsAleatorios(min, max, qtd);
let result = perguntas.filter(o => filtro.has(o.idpergunta));

return Promise.resolve(result)

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