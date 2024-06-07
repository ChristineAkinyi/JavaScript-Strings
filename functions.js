function add (num1, num2){
   const sum = num1+num2;
    console.log({console:sum});
  return {'sum' : sum};
 }

 console.log(add(2,3));
 add(4,5);

// function add (num1, num2){
//     const sum = num1+num2;
//     console.log({console:sum});
//     return {'sum' : sum};
// }

//   console.log(add(2,3)); 
// add(4,5);(gone back to the function and found what you had consoled and shows you output)
// two consoles(inner) and outer one brings one5 and second undefined because the second one does not find any value as you had consoled in the first console so it is not in store


function item(){
    const names = ["Anne", "Eunice"]
    console.log({names});
}
item();

// function expressions

const subtract = function(num1, num2){
    console.log(num1-num2);
};
subtract(20,10);

// arrow functions
//const multiply = (num1, num2) => num1-num2(returning)
// multiply(6,9)
// 
// 

const multiply = (num1, num2) => console.log(num1*num2);
multiply(6,9);

// IIFEs
(function () {
    console.log('Hello there');
})();


// Hoisting(only var allows hoisting) but if you want to use it, write functions normally
console.log({person});
var person = 'human';
console.log('person2...', person);

// normal 
greet();
function greet(){
    console.log('Hi person');
}

// 
hello();
const hello = () => console.log('This is a greeting');

