const resp = [
    { question_id: 1, answer: 'Uma oportunidade de lucro.' },
    {
      question_id: 1,
      answer: 'Uma incerteza que pode afetar os objetivos da empresa.'
    },
    { question_id: 1, answer: 'Uma garantia de sucesso.' },
    { question_id: 1, answer: 'Um evento positivo.' },
    { question_id: 2, answer: 'Monitoramento dos riscos.' },
    { question_id: 2, answer: 'Identificação dos riscos.' },
    { question_id: 2, answer: 'Análise dos riscos.' },
    { question_id: 2, answer: 'Definição de estratégias de mitigação.' },
    { question_id: 3, answer: 'Eliminar todos os riscos.' },
    {
      question_id: 3,
      answer: 'Minimizar os impactos negativos dos riscos.'
    },
    { question_id: 3, answer: 'Ignorar os riscos.' },
    {
      question_id: 3,
      answer: 'Transferir todos os riscos para terceiros.'
    }
  ]

  console.log(resp.filter(respostas => respostas.question_id == 1))
  