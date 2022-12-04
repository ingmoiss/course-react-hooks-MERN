import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Test in 05-funciones', () => { 

    test('should return object', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );

    });

    test('should return object with "Moises', () => { 
        
        const name = 'Moises';

        const user = getUsuarioActivo(name);

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: 'Moises'
        });
        
    })

})