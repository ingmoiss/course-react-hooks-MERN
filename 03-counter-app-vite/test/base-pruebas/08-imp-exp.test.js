import { exact } from "prop-types";
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes'

describe('Test in 08-imp-exp', () => { 
    
    test('should return hero by ID', () => { 
        
        const ID = 1;
        const hero = getHeroeById( ID );

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } );

    })

    test('should return undefine if it does not exist', () => { 
        
        const ID = 100;
        const hero = getHeroeById( ID );

        expect( hero ).toBeFalsy();

    })

    test('should return array by DC owner', () => { 
        
        const owner = 'DC';
        const array = getHeroesByOwner( owner );

        expect( array.length ).toBe( 3 );
        // expect( array[0] ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
        // expect( array[1] ).toEqual( { id: 3, name: 'Superman', owner: 'DC' } );
        // expect( array[2] ).toEqual(  { id: 4, name: 'Flash', owner: 'DC' } );

        expect( array ).toEqual( array.filter( (heroe) => heroe.owner === owner) );

   })

   test('should return array by Marvel owner', () => { 
        
        const owner = 'Marvel';
        const array = getHeroesByOwner( owner );

        expect( array.length ).toBe( 2 );
    })

})