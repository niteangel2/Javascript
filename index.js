console.log("Shuru krte hai");
//object creation
let rectangle = {
    length: 5,
    width: 10,
    draw : function(){
        console.log("Draw rectangle");
    }
   
};

// factory function
function createRectangle() {
    let rectangle = {
        length: 5,
        width: 10,
        draw : function(){
            console.log("Draw rectangle");
        }
       
    };
    return rectangle;
}
let rect1 = createRectangle();
rect1.draw();
// with parameters
function createRectangle1(length, width) {
    return rectangle = {
        length: length,
        width: width,
        draw : function(){
            console.log(length * width);
            console.log("Draw rectangle with parameters");
        }
       
    }; 
}

let rect2 = createRectangle1(10, 20);
rect2.draw();

// Constructor function
function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log("Draw"); 
    }
}

let rect3 = new Rectangle();
rect3.draw(); 

// primitive type copies by value
let a = 10;
let b = a;
a++;
console.log(a); //output = 11
console.log(b);//output = 10

//refernce type copied by address
let x = {value: 10};
let y = x;
x.value++;
console.log(x); //output = 11
console.log(y); //output = 11

let obj = {
    length: 5,
    width: 10,
};
// for in loop
for(let key in obj){
    //only keys
    console.log(key);
    //key value pairs
    console.log(key, obj[key]);
}

// for of loop

// for(let key of rectangle) { //will give error because obj is not iterable 
//     console.log(key);
// }
//we can apply for of loop in obj by using object.keys() method
for(let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// is any property is present in object or not

if('color' in obj) {
    console.log("Color is present");
}
else{
    console.log("Color is not present");
}

//cloning an object

//using iteration
let src = {value: 10};
let dest = {};
for(let key in src) {
    dest[key] = src[key];
}

//using assign method
let dest1 = Object.assign({},src);
console.log(dest1);

//using spread method

let dest2 = {...src};
console.log(dest2);

//using in built object method 
//using math object
console.log(Math.random());
console.log(Math.PI);

//using string object
let firstName = "abcd";
console.log(firstName.toUpperCase());
console.log(firstName.replace("ab","xy"));
console.log(firstName.substring(1));

let str = "This is a string";
let sstr = str.split(" ");
console.log(sstr);


//template literals

let message = "This is my \n message";
console.log(message);

//use back ticks
let message2 = 
`Hello there,
 I am Vaishnavi`;
 console.log(message2);

 //use placeholder ${}
 let firstname1 = "Vaishnavi";
 let message1 = `Hello ${firstname1}`;
 console.log(message1);

 //date object
 let date = new Date();
 console.log(date);
 let date2 = new Date('June 20 1999 07:15');
 console.log(date2);

 //Arrays - Object/Refernce type - collection of items
 let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Insertion in arrays - 3 cases
//at end push methos
numbers.push(6); //at end 6 will be inserted
console.log(numbers);

//at start unshift method
numbers.unshift(0); //at start 0 will be inserted
console.log(numbers);

//at middle splice method
numbers.splice(2, 0, 'a','b','c'); //at index 2, delete 0 elements, insert a,b,c
console.log(numbers);

//searching in arrays
//indexOf method
console.log(numbers.indexOf(3)); //returns index of 3
console.log(numbers.indexOf('9'));  //returns -1 if not present

//includes method
console.log(numbers.includes(3)); //returns true
console.log(numbers.includes('9')); //returns false

//index of method with fromIndex
console.log(numbers.indexOf(3, 7)); //returns -1 because 3 is not present after index 3
console.log(numbers.indexOf(3, 2)); //returns 2 because 3 is present after index 2

//array of objects

let courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];
console.log(courses);
console.log(courses.indexOf({id: 1, name: 'a'})); //returns -1 because it is a reference type becauses addresses are different
//to solve this problem we use find method
 
let course = courses.find(function(course) {
    return course.name === 'a';
});
console.log(course);

//use arrow function to make the length of code small also 
//remove function keyword and use => after parameters
//remove return keyword and use directly after =>
let course1 = courses.find(course => course.name === 'a'); //if single parameter then remove brackets as well
console.log(course1);

let numbers1 = [1, 2, 3, 4, 5];
//removing an element from array
//pop method for end
let last = numbers1.pop(); //removes last element 5 and returns it
console.log(last);
console.log(numbers1);

//shift method for start
let first = numbers1.shift(); //removes first element 1 and returns it
console.log(numbers1);

//splice method for middle
numbers1.splice(2, 1); //at index 2, delete 1 element
console.log(numbers1);

//emptying an array
let numbers2 = [1, 2, 3, 4, 5];
let numbers3 = numbers2;
//numbers2 = []; // as elements were retain they didnt actually get deleted they are still in memory
console.log(numbers2);
console.log(numbers3);

numbers2.length = 0; //this will empty the array
console.log(numbers2);
console.log(numbers3);

//use splice method
numbers2.splice(0, numbers2.length); //start at 0 and delete all elements till the end
console.log(numbers2);

//combine and slice arrays on primitives
let arr = [1,2,3];
let arr1 = ['a','b','c'];

let concatarr = arr.concat(arr1); //combine two arrays
console.log(concatarr);

let sliced = concatarr.slice(2,4); //slice array from index 2(inclusive) to 4(exclusive)
console.log(sliced);

//slicing and combining on objects

let arr3 = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
];
let arr4 = [
    {id: 4, name: 'd'},
];

let combinedarr = arr3.concat(arr4); // it also combines object arr

//iterating an array
// for each loop
let arr5 = [1,2,3,4,5];
arr5.forEach(function(number){
    console.log(number);
});
//second way with arrow function

arr5.forEach(number => console.log(number)); //if single parameter then remove brackets as well


//joining an array 
const joined = arr5.join(','); //joins array elements with comma
console.log(joined);


let m = "this is my first passage";
let parts = m.split(' '); //splits string into array of words
console.log(parts);

// sort an array
let arr6 = [2,3,1,5,4];
//Sorts an array in place. This method mutates the array and 
//returns a reference to the same array.
arr6.sort();
console.log(arr6);

//reverse an array
arr6.reverse();
console.log(arr6);
//sorting of object arrays
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  console.log(items);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  console.log(items);//sorts by name first character
  
  //filter the array
  let numbers4 = [1, -1, 2, 3,-4,-5,6];
  let filtered = numbers4.filter(function(val){
    return val >= 0;
  });
  console.log(filtered);//positive values

//second way with arrow function
 let filtered1 = numbers4.filter(val => val < 0);
 console.log(filtered1);//filtering negative values

 //mapping an array

 let array = [1, 2, 3, 4];
 let mapped = array.map(function(val){
    return  'student_no: ' + val;
 });
 console.log(mapped); //output = ["student_no: 1", "student_no: 2", "student_no: 3", "student_no: 4"]  

//second way with arrow function

let mapped1 = array.map(val =>  val+2);
console.log(mapped1); //output = [3, 4, 5, 6]



