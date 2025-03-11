
const Quiz = require("../engine/quiz")


// function aleatorioEntre(min, max){
//   let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//   return numeroAleatorio;
// }

// function idsAleatorios(min, max, qtd){
//   let ids = new Set();
//   do
//   {
//     ids.add(aleatorioEntre(min, max))
//   } 
//   while (ids.size !== qtd)

//   return ids;
// }


// let perguntas = [
//   { idpergunta: 1, pergunta: 'Pergunta 1' },
//   { idpergunta: 2, pergunta: 'Pergunta 2' },
//   { idpergunta: 3, pergunta: 'Pergunta 3' },
//   { idpergunta: 4, pergunta: 'Pergunta 4' },
//   { idpergunta: 5, pergunta: 'Pergunta 5' },
//   { idpergunta: 6, pergunta: 'Pergunta 6' },
//   { idpergunta: 7, pergunta: 'Pergunta 7' },
//   { idpergunta: 8, pergunta: 'Pergunta 8' },
//   { idpergunta: 9, pergunta: 'Pergunta 9' },
//   { idpergunta: 10, pergunta: 'Pergunta 10' }
// ]


// let filtro = idsAleatorios(1, 10, 3)
// let result = perguntas.filter(o => filtro.has(o.idpergunta))

// // console.log(filtro, "\n", result)


// let perguntas_embaralhadas = [];

// idsAleatorios(1,10,3).forEach(id => {
//   perguntas_embaralhadas.push(perguntas.find(p => p.idpergunta == id))
// })

async function teste3(){
  const r = await Quiz.ResponderPergunta(1, 2, 1)
 
  console.log(r)

}

teste3()



