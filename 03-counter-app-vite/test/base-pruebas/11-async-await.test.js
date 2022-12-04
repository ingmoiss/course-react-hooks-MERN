import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Test in 11-async-await', () => { 

    test('should return a URL image ', async () => { 

        const URL = await getImagen();

        expect( typeof URL ).toBe( 'string' );

    });

});