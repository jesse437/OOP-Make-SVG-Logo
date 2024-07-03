// This function makes sure that the user inputs text and not leaves it empty
// In this function ive also added the trim function to correct any blank spaces left blank in between user input
function validateEmpty(input){
    if (input.trim() == ''){
        return 'Please enter a string. Input cannot be empty';
    }
    return true;
}
module.exports = validateEmpty;