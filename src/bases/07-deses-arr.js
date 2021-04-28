// Desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return["ABC", 123];
}

const [Letras, Numeros] = retornaArreglo();
console.log(Letras, Numeros);

//Tarea
//1. El primer valor de arr se llamara nombre
//2. Se llamara setNombre;

const State = (valor) =>{
    return[valor, () => {console.log("Hola mundo")}];
}
const arr = State("Goku");
const [nombre, setNombre] = arr;
console.log(nombre);
setNombre();