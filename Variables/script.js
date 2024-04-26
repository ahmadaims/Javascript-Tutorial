let x = 10;
console.log(x); 
console.log('this is the string x'); // In quotes it has to be string
console.log(`this is the value of x : ${x}`); // This is a backtick symbol inside this symbol we cann pass variables and string both


x = 20 
console.log(`Now the value of x is : '${x}' I reassigned the variable x to 20`);









// IGNORE THIS PART IF YOU ARE LEARNING FORM BASICS THIS IS JUST CHAGING THE CONTENT OF THE MAIN HEADING FROM "JACASCRIPT VARIABLES" TO "VARIABLE CLASS" AFTER 1000ms(1s)
console.log('IGNORE THE BELOW ANSWER IF YOU ARE LEARNING FROM BASICS');
let mainHeading = document.getElementById('main-heading').textContent;
console.log(mainHeading);
function changeHeading(){
	mainHeading = "Variables Class";
	console.log(mainHeading);
	document.getElementById('main-heading').textContent = mainHeading;
}
const myTimeout = setTimeout(changeHeading, 1000);