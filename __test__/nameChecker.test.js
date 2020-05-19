import { getResult } from '../src/client/js/nameChecker';

// Test if the function return a string and not other type
test('returned value is a string', async () => {
    getResult('http://localhost:8081/getting')
        .then(data => {
            expect(data).toEqual('string');
        })
})
