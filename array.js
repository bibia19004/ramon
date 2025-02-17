function isPar(num) {
    return num % 2 === 0;
}

function filtrarPares(arr) {
    let pares = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (isPar(arr[i])) {
            pares.push(arr[i]);
        }
    }

    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarPares(numeros);

console.log(numerosPares); 