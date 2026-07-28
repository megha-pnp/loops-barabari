// Ques1: Write a JavaScript program to find the maximum between three distinct numbers.
// let a = 500;
// let b = 200;
// let c = 5000;
// if(a>b && a>c){
//     console.log(`${a} is greater`);
// }
// else if(b>a && b>c){
//     console.log(`${b} is greater`);
// }
// else{
//     console.log(`${c} is greater`); 
// }

// Ques2: Write a JavaScript program to check whether a year is a leap year or not.
// let year = 1900;
// if(year % 400 == 0 || (year % 4 ==0 && year % 100 != 0)){
//     console.log(`${year} is a leap year`);
// }else{
//     console.log(`${year} is not a leap year`); 
// }

// Ques3: Write a JavaScript program to check whether a number is even or odd.
// let num = 25;
// if(num%2==0){
//     console.log("Even number");
// }else{
//     console.log("Odd Number");
// }

// Ques4: Write a JavaScript program to check whether a character is an alphabet, digit, or a special character.
//  let character = "yeah";
// if(character != "" && !isNaN(character)){
//     console.log(`${character} is a digit`);
// }
// else if(character.toLocaleLowerCase() >= 'a' && character.toLocaleLowerCase() <='z'){
//     console.log(`${character} is an alphabet or string`); 
// }
// else{
//     console.log(`${character} is a special characater`);
// }

// Ques5: Write a JavaScript program to check whether three given angles form a valid triangle
let angle1 = 60;
let angle2 = 50;
let angle3 = 70;
if((angle1>0 && angle2>0 && angle3>0) && (angle1 + angle2 + angle3 === 180)){
    console.log("valid triangle");
}else{
    console.log("Not a valid triangle");
}
