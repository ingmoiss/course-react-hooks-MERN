import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Test in 09-promesas', () => { 
    
    test('should return a promise', ( done ) => { 
        
        const ID = 1;
        getHeroeByIdAsync( ID )
            .then( hero => {

                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );

                done();                
            });
    });

    test('should get error if the hero does not exist', ( done ) => { 
        
        const ID = 100;
        getHeroeByIdAsync( ID )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error => {

                console.log( error );
                expect( error ).toBe( 'No se pudo encontrar el héroe ' + ID );

                done();                
            });
    });

})