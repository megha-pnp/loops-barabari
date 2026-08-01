// SECTION 1 : COMPARISON & TYPE COERCION

// console.log("9" > "100");  //output is true because two strings compared and it checks the first character lexicographically so "1" comes before "9" i.e 9 > 1
// console.log(9 > "100"); //false, bcz of comparison(>) op. js converts string"100" into numeric 100 and compares it with 9 so 9 is not greater than 100      
// console.log("5" == 5 && "5" === 5); //false, because second condition checks strict equality means it also checks data type
// console.log(null == 0);        //false, bcz null is not equal to 0(null means empty)
// console.log(undefined == null); //true, bcz undefined means variable doesn't contain any value and null also means empty, but it is true only in lose equality check

// let a = 10; let b = 5;
// a =+ b //assigns positive b to a   ??????????
// console.log(a,b);

// let a=5; 
// console.log(a == "5"); //output -> true, bcz of lose comparison

// SECTION 2: LOGICAL OPERATORS

// console.log(0 && "hello"); // 0,bcz && returns first falsy value and if it finds falsy value then it doesn't checks another condition
// console.log("world" || 0); // world, bcz || returns first truthy value and it dosen't checks another conditons if it finds truthy value
// console.log(null || undefined && "JS"); // undefined
// // && has higher precedence than || so first this checks: undefined && "JS" -> undefined(&& returns first falsy value) then = null || undefined (there is no any truthy value so || returns the last value )
// console.log(" " && 55 && [] && "done"); // done
// " "(string containing space) = truthy value, 55 = truthy value(non-zero value or not NaN), [] = an empty array is a truthy value, so first three are true and then it compares it with "done" which is also true so last value is "done" and output wil be "done"

// P.O.V : && returns first falsy value and || returns first truthy value and is there not any truthy or fasly value they returns last value

// console.log(true && false); // false (&& return first falsy value)

// SECTION 3
// let x =10;
// x += 5; x -= 3; x *= 2;
// console.log(x); //24

let p = 7; 
let q = 12; 
let r = 5;    
p = p & r;  
q = q | r;                                  
r = r ^ p;                                  
console.log(p, q, r);