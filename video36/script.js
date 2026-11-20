console.log("Hello I am conditional tutorial");
console.log("see your result");

let marks = 78;
let grace = 2;

marks += grace;
console.log(marks);
console.log(marks + grace);
console.log(marks - grace);
console.log(marks * grace);
console.log(marks / grace);
console.log(marks ** grace);
console.log(marks % grace);

/*
I am a
multiline
comment
*/

if (marks >= 18) {
  console.log("You are pass my bro");
} else if (marks == 0) {
  console.log("Are you kidding you should study more?");
} else if (marks == 1) {
  console.log("Are you again kidding i will call your parents?");
} else {
  console.log("You are fail my bro");
}


let a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/