const validateEmpty = require('./ValidateEmpty');

describe('validateEmpty', ()=>{
    it('Should return as false if the input is empty string', ()=>{
        const input = '';
        const test = validateEmpty(input);
        expect(test).toEqual('Please enter a string. Input cannot be empty')
    })
})