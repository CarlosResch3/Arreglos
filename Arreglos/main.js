//Crear un array vacío y generar 10 números al azar

let numeros = [];
for(let i = 0; i < 10; i++){
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array de números aleatorios", numeros)

let stringUsuario = prompt("Por favor ingresa varios números separados por comas");
let arrayNumeros = stringUsuario.split(',');
console.log("Array de números", arrayNumeros)

let numerosString = prompt("Por favor ingresa una secuencia de números separados por una coma");

let arraySecuencia = numerosString.split(',').map(Number);
console.log("Array de secuencia", arraySecuencia);

let arrayDado = [10, 40, 30, 20, 15, 5];
let arrayOrdenado = arrayDado.slice().sort((a, b) => a - b);
let numeroMenor = Math.min(...arrayDado);
let numeroMayor = Math.max(...arrayDado);
console.log("Array ordenado de menor a mayor:", arrayOrdenado);
console.log("Número menor", numeroMenor);
console.log("Número mayor", numeroMayor);
