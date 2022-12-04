
describe('Test in <DemoComponent/>.', () => { 

    test('This test should not fail', () => { 
    
        //1. Inicialization
        const message1 = 'Hola mundo';
        //2. 
        const message2 = message1.trim();
    
        //3.
        expect(message1).toBe(message2);
    
    })

})

