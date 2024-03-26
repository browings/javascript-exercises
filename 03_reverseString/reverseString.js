const reverseString = function(word) {

    let ch;
    let reverseStr = '';
    for (let i=0; i<word.length; i++)
    {
      ch= word.charAt(i); //extracts each character
      reverseStr= ch+reverseStr; //adds each character in front of the existing string

}
return reverseStr
}


// Do not edit below this line
module.exports = reverseString;
