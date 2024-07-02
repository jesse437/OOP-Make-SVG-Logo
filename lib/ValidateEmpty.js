function validateEmpty(input){
    if (input.trim() == ''){
        return 'Please enter a string. Input cannot be empty';
    }
    return true;
}
module.exports = validateEmpty;