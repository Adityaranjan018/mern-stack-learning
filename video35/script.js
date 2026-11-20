console.log("Hey this is tutorial 2 of js");

var a = 5;
// a = a + 1
let b = 6;
let c = "addy";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66; let is an block scope unlike var(var is globaly scope it has no blocks scope)
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant

let x = "addy bhai";
let y = 22;
let z = 9.99;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// objects in js

let o = {
    "name": "addy",
    "job code": 1800,
    "is_handsome": true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);