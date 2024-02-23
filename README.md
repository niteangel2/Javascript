# JavaScript Object-Oriented Concepts

Welcome to this repository that explores fundamental JavaScript object-oriented programming (OOP) concepts. The provided code covers object creation, factory functions, constructor functions, variable assignment, object iteration, property checks, object cloning, and in-built object methods.
## Introduction

This repository contains JavaScript code snippets covering various concepts and practices.
## Contents
1. **Object Creation:**
   - Literal notation for creating a rectangle object.
   - Factory function to create a rectangle object.
   - Factory function with parameters to create a rectangle object.

2. **Constructor Function:**
   - Example of a constructor function (`Rectangle`) to create objects.

3. **Variable Assignment and Copying:**
   - Demonstrates how primitive types and reference types are handled.

4. **Object Iteration:**
   - For...In loop for iterating through object properties.
   - For...Of loop using Object.keys() for iterating through object keys.

5. **Object Property Check:**
   - Checks if a property ('color') is present in the object.

6. **Object Cloning:**
   - Cloning an object using iteration.
   - Cloning an object using `Object.assign()` method.
   - Cloning an object using the spread operator.

7. **In-Built Object Methods:**
   - Examples of using the Math and String objects.



8. [String Manipulation](#string-manipulation) 
9. [Date Objects](#date-objects)
10. [Arrays](#arrays)
11. [Array Manipulation](#array-manipulation)
12. [Object Arrays](#object-arrays)
13. [Array Element Removal](#array-element-removal)
14. [Emptying an Array](#emptying-an-array)
15. [Combining and Slicing Arrays](#combining-and-slicing-arrays)
16. [Array Iteration](#array-iteration)
17. [Joining and Splitting Arrays](#joining-and-splitting-arrays)
18. [Sorting Arrays](#sorting-arrays)
19. [Filtering Arrays](#filtering-arrays)
20. [Mapping Arrays](#mapping-arrays)


## String Manipulation

```javascript
let message = "This is my \n message";
console.log(message);

let message2 = `Hello there,
 I am Vaishnavi`;
console.log(message2);

let firstname1 = "Vaishnavi";
let message1 = `Hello ${firstname1}`;
console.log(message1);
```

## Date Objects

```javascript
// Creating a new Date object with the current date and time
let currentDate = new Date();
console.log(currentDate);

// Creating a new Date object with a specific date and time
let customDate = new Date('June 20 1999 07:15');
console.log(customDate);
```
## Arrays

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
```

## Array Manipulation

```javascript
// Insertion in arrays
numbers.push(6); // at the end, 6 will be inserted
console.log(numbers);

numbers.unshift(0); // at the start, 0 will be inserted
console.log(numbers);

numbers.splice(2, 0, 'a', 'b', 'c'); // at index 2, delete 0 elements, insert a, b, c
console.log(numbers);

// Searching in arrays
console.log(numbers.indexOf(3)); // returns index of 3
console.log(numbers.indexOf('9')); // returns -1 if not present

// ...
```

## Object Arrays

```javascript
let courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];
console.log(courses);

let course = courses.find(course => course.name === 'a');
console.log(course);
```

## Array Element removal
```javascript
let numbers1 = [1, 2, 3, 4, 5];

let last = numbers1.pop(); // removes last element 5 and returns it
console.log(last);
console.log(numbers1);

let first = numbers1.shift(); // removes first element 1 and returns it
console.log(numbers1);

numbers1.splice(2, 1); // at index 2, delete 1 element
console.log(numbers1);
```
## Emptying an array

```javascript
let numbers2 = [1, 2, 3, 4, 5];
numbers2.length = 0; // this will empty the array
console.log(numbers2);
```

## Combining and Slicing Arrays
```javascript
let arr = [1, 2, 3];
let arr1 = ['a', 'b', 'c'];

let concatarr = arr.concat(arr1); // combine two arrays
console.log(concatarr);

let sliced = concatarr.slice(2, 4); // slice array from index 2 (inclusive) to 4 (exclusive)
console.log(sliced);
```

## Array Iteration

```javascript
let arr5 = [1, 2, 3, 4, 5];
arr5.forEach(number => console.log(number));
```

## Joining and Splitting Arrays
## Sorting Arrays
## Filtering Arrays





