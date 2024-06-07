let fruits = ["Mango", "Banana", "Orange"];

let arr = new Array(20, 30);

console.log({fruits});
console.log({arr});

// replacing
fruits[1] = 2;
console.log({fruits});
// console.log(fruits[2]);
console.log("last item", fruits.slice(-1));
console.log("several items", fruits.slice(2,3));

// adding element at the end
let addLast = fruits.push("Apple");
console.log({fruits});


// adding element at the start
let addStart = fruits.unshift("Pineapple");
console.log({fruits});

// removing at the end
let removeLast = fruits.pop();
console.log({fruits});


// removing at the beginning
let removeFirst = fruits.shift();
console.log({fruits});

// concat-two arrays together
// .push- array inside array
// adding array inside array
let newFruits = fruits.push(["Tomato", "Pear"])
console.log({fruits});

// arguments function in function-callback
let items = [20, 30, 40,50, 60];
let add = items.reduce((acc, cur) => acc + cur);
console.log({add});

// map-manipulates elemnts and brings back an array, does not modify elements in the original array
let multiply = items.map(item => item *2);
console.log({multiply});

// push is the right method since it adds every multiple at the end, meaning your result will always be  pushed to the left
let square = [];
let total = 0;
items.forEach(item => {
    const multiple = item * item;
    console.log(multiple);
    square.push(multiple);
    total +=item
});
console.log({square});
console.log({total});

// Destructuring
let [num1, num2, num3, ...rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});


