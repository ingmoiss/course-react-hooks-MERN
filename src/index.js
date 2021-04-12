//Funcione en js

//Funcion normal 
const saludar = function(nombre){
    return `Hola, ${nombre}`;
};

//Funcion flecha
const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) =>`Hola, ${nombre}`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);

//Se crea un return implicito
const getUser = () => (
    {
        userId: 123,
        username: "El_papi123",
    }
);

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo = (nombre) =>(
    {
        idUser: 123,
        usarname: nombre,
    }
);

const usuarioActivo = getUsuarioActivo("Moisex");
console.log(usuarioActivo);