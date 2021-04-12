//Desestructuracion 
//Asignacion desestructurante

const persona ={
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

// const {edad, nombre, clave} = persona;

// console.log(edad);
// console.log(nombre);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango = "Capitan"}) => {

    // console.log(nombre, edad, rango );
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.2343,
            lng: 23.2334,
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);