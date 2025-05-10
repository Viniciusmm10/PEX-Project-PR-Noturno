

//let carros = ["Opala", "Chevete", "Ford T", "Fiat 47"]

let carros = [
    {
        nome: "Opala",
        ano_fabricacao: "1971"
    },
    {
        nome: "Chevete",
        ano_fabricacao: "1970"
    },
    {
        nome: "Ford T",
        ano_fabricacao: "1908"
    },
    {
        nome: "Fiat 47",
        ano_fabricacao: "1976"
    }
]


// for(i = 0; i < carros.length; i++){
//     console.log(carros[i].nome, carros[i].ano_fabricacao)
// }

// let i = 0

// while(i < carros.length){
//     console.log(carros[i].nome, carros[i].ano_fabricacao)
//     i++
// }


// let i = 0
// do{
//     console.log(carros[i].nome, carros[i].ano_fabricacao)
//     i++
// } while(i < carros.length)


// carros.forEach(carro => {
//     console.log(carro.nome, carro.ano_fabricacao)
// })


// for(i in carros){
//     console.log(carros[i].nome, carros[i].ano_fabricacao)
// }

for(carro of carros){
    console.log(carro.nome, carro.ano_fabricacao)
}



