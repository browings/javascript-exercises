const fibonacci = function(number) {

    

if (typeof number == "string") {
    number = parseInt(number);
}


if (number == 1 || number == 0) {
    return number;
}

else if (number < 0) {
    return "OOPS";
}

    else {

        let prev = 0;
        let curr = 1;
        let result = 0;


        for (i = 1; i < number; i++) {
        result = prev + curr;
        prev = curr;
        curr = result; 
        };
        return result
    }



}

// Do not edit below this line
module.exports = fibonacci;
