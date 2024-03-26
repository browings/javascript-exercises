const add = function(augend, addend) {
	
  let sum ;

  sum = augend+addend;

  return sum
};

const subtract = function(minuend, subtrahend) {
	
  let difference ;

  difference = minuend-subtrahend;
  return difference


};

const sum = function(array) {
	
let sum=0; 

for(i=0; i< array.length; i++){
  sum = sum + array[i];
}
return sum

};

const multiply = function(array) {

let product = 1;

for (i=0; i< array.length; i++){
    product = product * array[i];
  }
return product

};

const power = function(base, exponent) {

let exponentiation = 1;

for (i=0; i<exponent; i++){
    exponentiation = exponentiation * base;
    
}
return exponentiation

};

const factorial = function(number) {
  
let fact = 1;

if (number === 0 || number === 1) {
  fact = 1
  return fact
}

else {
  for (i=1; i<=number; i++){
  fact = fact*i;
    }
    return fact 

}



};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
