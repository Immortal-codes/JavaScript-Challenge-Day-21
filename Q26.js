//Write a JavaScript program that will return true if the string is y/yes or false if the string is n/noWrite a JavaScript program that will return true if the string is y/yes or false if the string is n/no

//#Source https://bit.ly/2neWfJ2 
const yes_No = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
console.log(yes_No('Y')); 
console.log(yes_No('yes'));  
console.log(yes_No('No')); 
console.log(yes_No('Foo', true));  
