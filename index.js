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


