console.log("hello world");
console.log("code is running");
console.log("code is also running");
console.log("code is looking like a wow");
console.log("--- If Else Test ---");

// Node me prompt ki jagah direct value daal dete hain
let age = 18; 
let hasId = true; // isko false karke dekhna

if (age >= 18 && hasId == true) {
  console.log("okay go, you can enter");
} else {
  console.log("no you can't go at that stage");
}

// Ek aur example
let num = 55;
console.log("your number is " + num);

if (num > 50) {
  console.log("number bada hai 50 se");
} else {
  console.log("number chota hai 50 se");
}

let marks = 95;

if(marks > 90){
  console.log("Topper");
} else if(marks > 60){
  console.log("First Division"); // Ye chalega
} else {
  console.log("Fail");
}