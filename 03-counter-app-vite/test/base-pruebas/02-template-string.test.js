import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test in 02-template-string', () => { 
    
    test('getSaludo should return "Hola name"', () =>{
        
        const name = 'Moises';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    });
     
})