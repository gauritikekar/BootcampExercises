var firstName = prompt("Enter User Firt Name:");
var lastName = prompt("Enter User Last Name:");
var age = prompt("Enter User Age:");

var fullName = firstName + " " + lastName;

console.log("Your full name is " + fullName);
console.log("Your age is : " + age);

var aliveDays = age * 365.25;
console.log("You have been alive for " + aliveDays + " days");


if( age < 0) {
	console.log("Age can not be negative");
}
if (age == 21){
	console.log("Happy 21st birthday !");
}
if (age % 2 != 0){
	console.log("your age is odd");
}
if (age % Math.sqrt(age) == 0) {
	console.log("your age is perfect square");
}