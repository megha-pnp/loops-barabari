let itemName = "headphones";
let price = "1500";
let quantity = 2;
let discount = 10;  //10% discount

let totalPrice = price*quantity;
let discountAmt = (totalPrice * discount) / 100;
let finalAmt = totalPrice - discountAmt;

console.log("Item: ", itemName);
console.log("Price:",Number(price));
console.log("Quantity: ", quantity);
console.log("Total Price: ",totalPrice);
console.log("Discount Amount: ",discountAmt );
console.log("Final Amount: ",finalAmt);

if(totalPrice >= 2000){
    console.log("free delivery");
}else{
    console.log("Delivery charge apply");
}
