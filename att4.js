function classificarNumero(numero) {
    if (numero === 0) {
        return "Zero";
    } else if (numero > 0 && numero % 2 === 0) {
        return "Positivo e Par";
    } else if (numero > 0) {
        return "Positivo e Ímpar";
    } else {
        return "Negativo";
    }
}
console.log(classificarNumero(-5));