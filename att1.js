function classificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log(classificarIdade(15))
