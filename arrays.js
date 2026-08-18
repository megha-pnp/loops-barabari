//SECTION A
// Question 1: Create an array of 5 of your favorite fruits (as strings), Then perform the following operations:
// a) Access the second fruit using index and print it.
// b) Access the last fruit using index and print it.
// c) Print the length of the array.
// d) Modify the third element of the array and print the updated array.
// const myarray = ["Apple", "Mango", "Dragon Fruit", "Avacado", "Banana"];
// console.log(myarray[1]); //accessing second fruit
//  console.log(myarray[4])//accessing last element (we can also access like this: console.log(myarray[myarray.length - 1]);)
// console.log("Length of array: "+ myarray.length);
// myarray[2] = "Kiwi"; //modifying third element
// console.log(myarray); //printing the updated array


// Question 2: Understanding Array References: 
// let arr1 = [10, 20, 30, 40];
// Part 1
// a) Assign arr1 to another variable arr2.
// b) Modify the second element of arr2 to 99.
// c) Print both arr1 and arr2.
// d) Explain what happens and why both arrays behave this way.

// let arr1 = [10, 20, 30, 40];
// let arr2 = arr1;
// arr2[1] = 99;
// console.log(arr1);
// console.log(arr2);
// both array's second element is changes bcz [arr2= arr1]does not make a new array, arr2 points to the same array that arr1 points.

// Part 2: Create a new array arr3 using the slice() method to make a shallow copy of arr1.
// a) Modify the last element of arr3 to 88.
// b) Print arr1, arr2, and arr3.
// c) Explain the behavior of each array.

// let arr3 = arr1.slice(0,4); // starts from index 0 and used 4 instead of 3 for end bcz slice excludes last element
// arr3[arr3.length - 1] = 88;
// console.log(arr1, "\n", arr2, "\n", arr3);
// behaviour: arr1 is simply printed after its updation of second element, arr2 also prints arr1 elements bcz arr2 is assigned with arr1 and arr3 is the shallow copy of arr1 and only modifed the last element


// SECTION 2: ARRAY METHODS
// Question 1: Create an array of numbers: [12, 15, 20, 25, 30]
// Perform the following operations:
// a) Use the push() method to add a number to the array.
// b) Use the pop() method to remove the last number from the array.
// c) Use indexOf() to find the position of 20 and print it.

// let arr = [12, 15, 20, 25, 30];
// console.log(arr.push(40)); //returns length
// console.log(arr.pop()); // returns item
// console.log(arr.indexOf(20));


// Question 2: Working with Array Methods: Given the array:
// let colors = ["red", "blue", "green", "yellow", "purple", "black"];
// a) Extract the middle three colors into a new array.
// b) Does this operation change the original array? Explain why or why not.

// let colors = ["red", "blue", "green", "yellow", "purple", "black"];
// let middleColors = colors.slice(1,4);
// console.log(middleColors); 
// It doesn't change the original array bcz slice() operation make a copy of an array and used it as a new array.


// Question 3: Insert and Remove Elements
// let items = ["pen", "pencil", "eraser", "scale", "sharpener"];
// a) Remove "eraser" and "scale" from the array.
// b) Insert "marker" and "ruler" at the same position.

// let items = ["pen", "pencil", "eraser", "scale", "sharpener"];
// items.splice(2,2); 
// items.splice(2,0,"marker", "ruler");
// console.log(items);


// SECTION 3: ADVANCED ARRAY OPERATIONS
// Question 1: Replace Values in an Array -> Given the array: let scores = [12, 25, 37, 48, 59, 63, 77];
// a) Replace only the last three values with 0.
// b) Then overwrite the entire array with "N/A".

// let scores = [12, 25, 37, 48, 59, 63, 77];
//  a)
//  scores.splice(4,3,0,0,0);
// console.log(scores);
// // b)
// scores = "N/A";
// console.log(scores);


// Question 2: Filtering Data from Arrays:  let numbers = [11, 22, 35, 42, 59, 60, 73, 88];
// a) Create a new array containing only numbers greater than or equal to 50.
// b) Write a separate function that checks whether a number is even, and use it to get only the even numbers from the original array.
// a)
//  let numbers = [11, 22, 35, 42, 59, 60, 73, 88];
//  let greaterthan50 = numbers.filter( function(num){
//     return num >= 50;
//  });
//  console.log(greaterthan50);

// // b)
// function isEven(num){
//     return num % 2 ==0;
// }
// let even = numbers.filter(isEven);
// console.log(even);


// Question 3: Loop through the following nested array using a for loop and print each value:
let cube = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];
for (let i = 0; i < cube.length; i++) {

    for (let j = 0; j < cube[i].length; j++) {

        for (let k = 0; k < cube[i][j].length; k++) {

            console.log(cube[i][j][k]);

        }
    }
}