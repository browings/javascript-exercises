const findTheOldest = function(people) {


 
//for loop:
  //declare variables: oldestPerson, age and set 0,
  //check yearOfDeath-yearOfBirth put value in name in oldestPerson if age > current age
  //else next round
  //retun oldestPerson

/*  const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]*/

let oldestPerson;
let age = 0;

for (let i=0; i<people.length; i++){
  if ((Object.keys(people[i])).length<3)
      {if ((new Date().getFullYear())-(people[i].yearOfBirth)>age)
         {age = (new Date().getFullYear())-(people[i].yearOfBirth); oldestPerson = people[i]}}

  else {if ((people[i].yearOfDeath)-(people[i].yearOfBirth)>age)
          {age = (people[i].yearOfDeath)-(people[i].yearOfBirth); oldestPerson = people[i];}}
  
  console.log(oldestPerson)
};
 


return oldestPerson;
  
}

// Do not edit below this line
module.exports = findTheOldest;
