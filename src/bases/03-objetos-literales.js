const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 40,
    direccion: {
        ciudad: "New York",
        zip: 213213,
        lat: 23.243,
        lng: 12.3453,
    }
};

// console.table(persona);

const persona2 = {...persona};
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);

