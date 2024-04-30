/* Function Declaration: This is the most common way to define a function. You use the function keyword, followed by a name, parentheses to hold parameters (inputs), curly braces to enclose the function body (the code that executes).  */
function greet(name) {
  console.log("Hello, " + name + "!");
};
greet("John");

function showAlert() { 
  alert ("Ahmad");
  greet ("Ahmad");
}



// Multiply       
function multiply(x, y) { /* parameter 1 and parameter 2 */
  return x * y;
}
console.log(multiply(2, 3));




// fahrenheit to celsius
let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 



// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
  console.log(carName);
}
myFunction();



// code below can NOT use carName it will show an error because carName is a local variable inside a function
// console.log(carName);


/* Basic example of functions */
/* 1.Calculating a Total: */
function calculateTotal(price, quantity) {
  return price * quantity;
}
// Like a cart page where product price has to multiply the product quantity to get the total cost
const productPrice = 10;
const productQuantity = 2;
const totalCost = calculateTotal(productPrice, productQuantity);
console.log(`Total cost: $${totalCost}`); // Output: Total cost: $20

