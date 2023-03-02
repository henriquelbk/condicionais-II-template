const idade = Number(prompt('qnts anos tem?'))

/*
if (idade >= 13) {
    if (idade < 18) {
        console.log('pode pegar o cartão')
    } else {
        console.log('consulte outra opção')
    }
} else {
    console.log('consulte outra opção')
}
*/

if (idade >= 13 && idade < 18) {
    console.log('pode pegar o cartão')
} else {
    console.log('consulte outra opção')
}

// TERNÁRIO

const idadeDependente = Number(prompt('qnts anos tem?'))

idadeDependente >= 13 && idadeDependente < 18 ? console.log('pode pegar o cartão') : console.log('consulte outra opção')

//SWITCH

const tipoCartao = Number(prompt('digite o numero correspondente ao tipo do cartão'))

switch(tipoCartao) {
    case 1:
        console.log('cartão fácil')
        break
    case 2:
        console.log('cartão gold')
        break
    case 3:
        console.log('cartão platinum')
        break
    case 4:
        console.log('cartão black')
        break
    default:
        console.log('escolha uma das opções acima')
        break
}

// Exercício

const umNumero = Number(prompt('Digite o numero'))

umNumero % 2 === 0 && umNumero % 3 === 0 ? console.log('É divisivel por 2 e 3') : console.log('Não é divisivel por 2 e 3')