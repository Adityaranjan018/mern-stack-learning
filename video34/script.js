// 1. Browser me popup dikhayega "hello world" ka
alert("hello world");

// 2. Ye messages browser ke Console me print honge (Inspect > Console me dikhenge)
console.log("code is running");
console.log("code is also running");
console.log("code is looking like a wow");

// 3. User se number input lega (popup box me)
var a = prompt("Enter your number");

// 4. User se permission lega - OK / Cancel ka popup
var isTrue = confirm("are you sure you want to leave this page");

// 5. Agar user ne OK (true) dabaya toh ye chalega
if (isTrue) {
  console.log("okay go");
} 
// 6. Agar user ne Cancel (false) dabaya toh ye chalega
else {
  console.log("no you can't go at that stage");
}

// 7. Jo number user ne diya tha, usko console me dikhayega
console.log("your number is " + a);
document.body.style.backgroundColor = 'green';