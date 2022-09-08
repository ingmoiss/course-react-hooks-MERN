import heroes, {owners} from '../Data/Heroes';

// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;  
//         }
//     });
// }

// console.log(owners);

export const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id === id);

// console.log(getHeroeById(2));


export const getHeroesByOwner = (owner) => heroes.filter(( heroe ) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));
