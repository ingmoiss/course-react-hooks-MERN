//Arreglos con js

// const arreglo = new Array( 100 ); para establecer una cantidad de campos en el arreglo
const arreglo = [1, 2, 3, 4];

//...arreglo nos trae todo lo que contiene arreglo y lo agrega a arreglo2
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((numero)=> {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);