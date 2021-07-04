

let person = prompt("Please enter your name:", "Enter your name here ");
let surname = prompt("Please enter your surname:", "Enter your surname here ");
let age = prompt("Please enter your age", "Enter your age here");

let result = (age > 18) ? ` Welcome Mr/Mrs ${person} ${surname}. You are allowed to our page` : 
(age < 18) `Sorry Mr/Mrs ${person} ${person}. You are allowed to our page because of age restriction `;
   alert(result);

   if (age == null || person == null || surname == null){
       alert("Please enter valid data for your Name, Surname and Age")
   }