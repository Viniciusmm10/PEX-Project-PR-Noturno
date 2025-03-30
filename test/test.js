const quiz = require("../engine/quiz")
const fs = require("fs")


const alternativas = async () => {
    const result = await quiz.Questionario()
    console.log(result)
}

alternativas()

const perguntas = [
    {
      idpergunta: 5,
      pergunta: 'Qual a importância da comunicação na gestão de riscos?'
    },
    {
      idpergunta: 8,
      pergunta: 'Qual a primeira etapa do processo de gestão de riscos?'
    },
    { idpergunta: 16, pergunta: 'O que é probabilidade de risco?' },
    { idpergunta: 24, pergunta: 'O que é monitoramento de riscos?' },
    {
      idpergunta: 29,
      pergunta: 'Qual das seguintes opções é um exemplo de risco em um projeto de construção?'
    },
    {
      idpergunta: 33,
      pergunta: 'Qual das seguintes opções é um benefício da gestão de riscos?'
    },
    {
      idpergunta: 34,
      pergunta: 'O que é a cultura de gestão de riscos?'
    },
    { idpergunta: 37, pergunta: 'O que é um risco em Gestão de Riscos?' },
    {
      idpergunta: 45,
      pergunta: 'Qual é o objetivo principal da Gestão de Riscos?'
    },
    {
      idpergunta: 47,
      pergunta: 'O que é uma análise quantitativa de riscos?'
    }
  ]

