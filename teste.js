if (condição){
    //executa esse bloco
} else if (condição2) {
    //executa este bloco
} else {
    //eecuta este blcoco
}


let permissão = idade>18


switch (permissão){
    case 'deixa passar':
    //Passa qualquer coisa
    break
    case 'não passa':
    //Passa outra coisa
    break
    default:
    // passa nada
    }

    function classificarIdade(idade) {
        if (idade < 18)
            return "Menor de idade"
        else if (idade >= 18 && idade <= 65){
            return "adulto"
        }else{
            return "idoso"
        }
    }