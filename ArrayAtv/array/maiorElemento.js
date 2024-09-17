const numeros = [2, 9, 7, 5, 1, 63, 39];
let maiorNumero = numeros[0]; 

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]; 
    }

}
console.log(maiorNumero);
