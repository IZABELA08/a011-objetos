const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataques: []
}

const pokemon1Copia = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água',

}

pokemon1.ataques.push({nome: 'Folha Navalha', dano: '45', tipo: 'grama', precisao: '100' })

pokemon1.ataques.push({nome: 'Jato de agua', dano: '40', tipo: 'água', precisao: '100' })

console.log(pokemon1)
console.log(pokemon1Copia)