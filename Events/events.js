/* The addEventListener() method adds an event listener to an element. */
/* this keyword in this exmaple refers to innerHtml property of the button element. */  
const button = document.getElementById("myButton");
const demo = document.getElementById("changePara");
button.addEventListener("click", function() {
  demo.innerHTML = Date();
  demo.style.color = "red";
  /* this keyword in this exmaple refers to innerHtml property of the button element. */
  this.style.backgroundColor = "seagreen";
});