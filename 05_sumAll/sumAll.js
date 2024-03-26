const sumAll = function(min,max) {
let sum = 0 ;
if (min < 0 || max < 0) {
    sum = 'ERROR';
    return sum
}

if (typeof min !="number" || typeof max !="number"){
    sum = 'ERROR';
    return sum
}

if (min > max) {
    const temp = min;
    min = max;
    max = temp;
}


//create variable for sum and set value to 0

for (let i = min; i <= max; i++) {      //create loop with counter; //counter = low number to high number
    sum += i;                          //add each counternumber to sum
}


return sum                              //return sum







};

// Do not edit below this line
module.exports = sumAll;
