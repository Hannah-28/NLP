import { handleSubmit } from '../src/client/js/formHandler';

// TESTING //
describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined();
    });
})