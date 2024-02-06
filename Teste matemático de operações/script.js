/* 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let numberOne = Number(prompt("Coloque o primeiro número: "))
let numberTwo = Number(prompt("Coloque o segundo número: "))

function print (number1, number2) {
    let sum = number1 + number2
    alert(`Soma foi ${sum.toFixed(2)}`)
    let sub = number1 - number2
    alert(`Subtração foi ${sub.toFixed(2)}`)
    let multi = number1 * number2
    alert(`Multiplicação foi ${multi.toFixed(2)}`)
    let div = (number1 / number2)
    alert(`Divisão foi ${div.toFixed(2)}`)
    let rest = number1 % number2
    alert(`Resto foi ${rest.toFixed(2)}`) 
    return "feito"
}

function impOuPar (number1, number2){
    if(((number1+number2) % 2) != 0){
        alert("A soma destes números é ímpar")
    } else{
        alert("A soma destes números é par")
    }
    return 
}

function theSame (number1, number2){
    if(number1 == number2){
        alert(`${number1} é igual a ${number2}`)
    } else{
        alert(`${number1} é diferente de ${number2}`)
    }
    return 
}

theSame(numberOne,numberTwo)
impOuPar(numberOne, numberTwo)
print(numberOne, numberTwo)