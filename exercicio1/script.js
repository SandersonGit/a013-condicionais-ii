const num = Number(prompt("Digite um número"))

console.log(num);

if(num % 2 === 0){
    console.log("O número é divisível por 2");
    if(num % 3 === 0){
        console.log("O número tbm é divisível por 3");
    }
}else{
    console.log("Esse número não pode ser dividido por 2 e 3 ao mesmo tempo");
}

if(num % 2 === 0 && num % 3 === 0){
    console.log("Esse número pode ser dividido tanto por 2 ou por 3");
}else{
    console.log("Esse número não pode ser dividido por 2 e 3 ao mesmo tempo");
}

