// Create an object:
/* The values are written as name:value pairs (name and value separated by a colon). */
const person = {
  name: "Ahmad",
  age: 30,
  city: "New York",
  eyeColor: "Green"
};



/* Use dot notation (object.propertyName) or bracket notation (object["propertyName"]) to access property values. */
console.log(person.name); // Ahmad
console.log(person["age"]); // 30



/* You can add new properties or modify existing ones using dot or bracket notation and assigning a value. */
person.name = "Muhammad";
person["eyeColor"] = "Blue";
console.log("Person name is "+person.name + " and his eyes color is " + person.eyeColor); /* Person name is Muhammad and his eyes color is Blue */




/* Use the delete keyword followed by the property name in dot or bracket notation. */
console.log(person.city); /* New York */
delete person.city;
console.log(person.city); /* undefined */


/* Object Methods: */
/* Objects can also contain methods, which are functions defined within the object that can operate on the object's data. */
const person2 = {
  firstName : "Ahmad",
  greet : function(){
    console.log("Hello, my name is " + this.firstName); /* Hello, my name is Ahmad */
  }
}
person2.greet();
/*
In the example above, this refers to the person2 object:
this.firstName means the firstName property of person2.
this.lastName means the lastName property of person2.
*/


/* What is this? */
/*
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called). 
The this keyword refers to different objects depending on how it is used:
*/