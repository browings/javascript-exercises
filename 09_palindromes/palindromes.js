const palindromes = function (originalWord) {

let reversedWord = ""       //create a new variable to hold the reversed string

let char = "";

let processedWord = originalWord.toLowerCase().replace(/[^a-z0-9]/g, "");


for (i=0; i<processedWord.length; i++){     //create a function or loop for twisting the letters of the original string an save it in the new variable
    char = processedWord.charAt(i);
    reversedWord = char+reversedWord;}
    


if (processedWord === reversedWord) {        // compare both variables and return true oder false / with an if function
    return true
}

else {return false}


};

// Do not edit below this line
module.exports = palindromes;
