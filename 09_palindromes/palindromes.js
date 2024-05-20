const palindromes = function (input) {
    let inputString = input.toLowerCase().replace(/[ ,.!?;:'"-]/g, '');
    let reverseString = inputString.split('').reverse().join('');
    return inputString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
