function aplicarDesconto(valor, codigoDesconto) {
    if (codigoDesconto === "DESC10") {
        return valor * 0.9;
    } else if (codigoDesconto === "DESC20") {
        return valor * 0.8;
    } else {
        return valor;
    }
}
console.log(aplicarDesconto(100, "DESC10"));