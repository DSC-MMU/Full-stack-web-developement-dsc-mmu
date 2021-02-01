//Data types in Javascript
/**
 * int
 * str
 * array
 * symbols
 * objects
 * boolean
 * date
 * 
 */
//Dynamic language

//ES5 

// var name = "Paullaster"
//let - define variable that whose value would and accessible with block where it was defined
//cost --when define constast or variable whose values would change 
//semi-colon shows end of javascript statement

// var name1 = 'Paullaster';
// let num = 5;
// const  array1 = [2,3,4,5,6,7];
// console.log(name1);
// console.log(num);
// console.log(array1);

//Operators
/**
 * Arithmetic -> addition(+) difference(-) division() /  product(*) exponential(**)  modulus(%)
 * for strings, array,obj Concatenation -> jioning strings ;
 * 
 * Logical operators : and(&&), or(||), not(!==), (!=) 
 * 
 * comparison: > < >= <= 
 * equality operator(==), identity operator(===)
 */
//Concatenation
// let user = "Kene"
// let pass ="rgvedoivnreioocmnwdoivnreo"
// console.log("The user is :" +user +" and his passowrd is :" +pass);

// var addNum  = 2+4;
// console.log(addNum);
// let productNum = 10**4; //Exponential

// let mod = 5%2

// console.log(mod);

//Array
 let user1 = ['ken', 'Tom', 'Geofrey',1,3,4,5, ['i', 'k']];
 let arr = new Array(); //Contructor
 //index -> start from 0
 //property length
 user1.push('Achieng');
 //pop
 //unshift
 //shift
 //index
 console.log(user1[7][0])
 console.log(user1)
 console.log(user1.indexOf('Achieng'))
//Objects -> key-value pair
//Literal 
let obj = {
    fname: 'Florence',
    lname: 'Okoth',
}

let myObj = new Object();

//Conditional statements
//if statements