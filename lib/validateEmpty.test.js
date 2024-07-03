// Here I am using require to import the ValidateEmpty file
const validateEmpty = require('./ValidateEmpty');

// This describe function test my validateEmpty function 
describe('validateEmpty', () => {
    it('Should return as false if the input is empty string', () => {
        const input = '';
        const test = validateEmpty(input);
        expect(test).toEqual('Please enter a string. Input cannot be empty')
    })
})