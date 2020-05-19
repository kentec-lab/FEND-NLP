import { handleSubmit } from '../src/client/js/formHandler';

// Test if the function is defined
test('function exists', () => {
    expect(handleSubmit).toBeDefined();
})

// Test if the function is really a function.
test('is function', () => {
    expect(typeof handleSubmit).toBe('function');
})

