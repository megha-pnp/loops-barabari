// Ques1: Fizz Buzz Problem
// for(let i=1; i<=50; i++){
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0) { 
//         console.log("Buzz");
//     } 
//     else{
//         console.log(i);
//     }
// }

// Ques2: Greatest Common Divisor(GCD)
// let num1 = 120;
// let num2 = 18;
// let gcd = 0;
// for(let i=1; i<=Math.min(num1,num2); i++){
//     if(num1%i===0 && num2%i===0){
//        gcd = i;
//     }
// }
//   console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);

// Ques3: Sum of Multiples
// let sum = 0;
// for(let i=1; i<=49; i++){
//     if(i%3===0 || i%5===0){
//         sum += i;
//     }
// }console.log(`The sum of all multiples of 3 and 5 below 50 is: ${sum}`);

// Ques4: Pattern Printing
//Pattern1: Nested Loops
// for(let i=5; i>=1; i--){
//     let pattern = "";
//     for(let j=1; j<=i; j++){
//        pattern += "*"; // pattern = pattern + "*";
//     }
//     console.log(pattern);
// }

//Pattern2: Floyd's Triangle
//  let count = 1;
// for(let i=1; i<=5; i++){
//     let row = "";

//     for(let j=1; j<=i; j++){
//       row += count + " "; //row = row + count + " "
//       count++;
//     }
//     console.log(row);
// }

// Pattern 3
// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15
// let count = 1;
// for(let i=5; i>=1; i--){
//   let row = "";

//   for(let j=1; j<=i; j++){
//     row += count + " ";
//     count++;
//   }
//   console.log(row);
// } 

//   Pattern 4
// 1111*1111
// 111***111
// 11*****11
// 1*******1
// *********
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   // for left 1's
//   for (j = 1; j <= n - i; j++) {
//     pattern += "1";
//   }
//   // for stars
//   for (let j = 1; j <= (2 * i - 1); j++) {
//     pattern += "*";
//   }
//   // for right 1's
//   for (j = 1; j <= n - i; j++) {
//       pattern += "1";
//     }
//     console.log(pattern);
//   }

//   Pattern 5
//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   // for left space
//   for (j = 1; j <= n - i; j++) {
//     pattern += " ";
//   }
//   // for stars
//   for (let j = 1; j <= (2 * i - 1); j++) {
//     pattern += "*";
//   }
//   // for right space
//   for (j = 1; j <= n - i; j++) {
//       pattern += " ";
//     }
//     console.log(pattern);
//   }

// Ques5: Advanced Loop Conditions
// for (let i = 1; i <= 1000; i++) {

//     let result = "";

//     if (i % 2 === 0) {
//         result += "Foo";
//     }

//     if (i % 3 === 0) {
//         result += "Fizz";
//     }

//     if (i % 5 === 0) {
//         result += "Buzz";
//     }

//     if (i % 7 === 0) {
//         result += "Bar";
//     }

//     if (result === "") {
//         console.log(i);
//     } else {
//         console.log(result);
//     }
// }



// SECTION 2: WRITTEN & CONCEPTUAL TASKS
// Task 1: Write a JavaScript program to print "Hello World" 10 times.
// for(let i=1; i<=10; i++){
//     console.log("Hello World");
// }

// Task 2: Write a for loop to print:
// 10
// 20
// 30
// 40
//   let num = 10;
// for(let i=1; i<=4; i++){
//     console.log(num);
//     num+=10;
// }

// Task 3: Predict the output and explain the reasoning:
// for (let i = 0; i < 5; i++) {
//     const name = "Sindhura";
//     console.log(i);
// }
// console.log(i);
// output : 0 1 2 3 4, Refrence error: i is not defined
// error occurs bcz i is declared using let and let is block scoped

// Task 4: Predict the output and explain what changes from the previous problem:
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i); // output:0 1 2 3 4 5 (5 occurs bcz of last console )
// i is declared using var so i value (5) at the end prints bcz var is not block scoped(it is function scoped)

// Task 5: Write a JavaScript program to print the multiplication table of 5 
// let n = 5;
// for(let i=1; i<=10; i++){
//     let mul = n * i;
//     console.log(`${n} x ${i} = ${mul}`);
// }

// Task 6: Write a JavaScript program to print: *****
// let pattern = "";
// for(let i=1; i<=5; i++){
//      pattern += "*"; 
// } console.log(pattern);

// Task 7: Print the pattern:
// *
// **
// ***
// ****
// for(let i=1; i<=4; i++){
//     let pattern = "";
//     for(let j=1; j<=i; j++){
//        pattern += "*";
//     }
//     console.log(pattern);
// }

// Task 8: Print the pattern:
// ****
// ****
// ****
// ****
// for(let i=1; i<=4; i++){
//     let pattern = "";
//     for(let j=1; j<=4; j++){
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// Task 9
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// for(let i=1; i<=8; i++){
//     let rows ="";
//     for(let j=1; j<=i; j++){
//         rows += j;
//     }
//     console.log(rows);
    
// }
// Task 10: Print the pattern:
// 9
// 98
// 987
// 9876
// 98765.....upto 1
// for(let i=1; i<=9; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row += 10 - j;
//     }
//     console.log(row);
// }

// Task 11
// 12345
// 1234
// 123
// 12
// 1
// for(let i=1; i<=5; i++){
//     let n = "";
//     for(j=1; j<=6-i; j++){
//         n += j;
//     }
//     console.log(n);
// }

// Task 12
// 11118
// 11188
// 11888
// 18888
// 88888
// for(let i=1; i<=5; i++){
//     let p = "";
//     for(let j=1; j<=5-i; j++){
//         p += "1";
//     }
//     for(let j=1; j<=i; j++){
//         p += "8";
//     }
//     console.log(p);
// }

// Task 13: Print the pattern:
// 0 * 9 + 8         = 8
// 9 * 9 + 7         = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888
// console.log("0 * 9 + 8 = 8");
// let right = "";
// for(let i=1; i<=8; i++){
//     let left = "";
//     // left side
//     for(let j=1; j<=i; j++){+
//         left += 10-j; 
//     }
//     // middle number
//     let middle = 9 - i;
//     // right side
//     right += "8";
//     console.log(`${left} * 9 + ${9-i} = ${right}`);
// }
// Task 14: Print the pattern:
// 1 x 8 + 1 = 9
// 12 x 8 + 2 = 98
// 123 x 8 + 3 = 987
// 1234 x 8 + 4 = 9876
// 12345 x 8 + 5 = 98765
// 123456 x 8 + 6 = 987654
// 1234567 x 8 + 7 = 9876543
// 12345678 x 8 + 8 = 98765432
// 123456789 x 8 + 9 = 987654321
// for(let i=1; i<=9; i++){
//     let p = "";
//     let right = "";
//     for(let j=1; j<=i; j++){
//         p +=j;
//         right += 10 - j;
//     }
//     console.log(`${p} X 8 + ${i} = ${right} `);
// }
// Task 15: Print the pattern:
// 1 9 0
// 2 8 2
// 3 7 4
// 4 6 6
// 5 5 8
// 6 4 10
for(let i=1; i<=6; i++){
    let left = "";
    for(let j=1; j<=i; j++){
        left = j;
    }
    console.log(`${left} ${10-left} ${(i-1)*2}`);   
}