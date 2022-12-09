const hvinh = `hello${1}`;
console.log("string", hvinh);
console.log("string", hvinh);
let num = 3;
num = 4;
console.log("number", num);
let number = prompt("please enter your number");
console.log(number);
//alert('Day la alert dong 10:' + num)
let str = "hoangvinh";
console.log("string", str);
let boo = false;
console.log("boolean", boo);
let hv; //undefined
console.log("undefined", hv);
let a = null; //null
console.log("null", a);
let object = {
  userName: "vinhpth",
  userAge: 20,
};
console.log("object", object);
console.log("object", object.userAge);
let ar = [1, 2, 3, 4, 5];
console.log("Array<muber>", ar);
console.log("Array<number>", ar[0]);
function getAgeUser() {
  //tên function
  console.log("getAgeUser");
  return 0;
}
let res = getAgeUser();
console.log(res);
function getPagram(_user) {
  console.log(_user);
}
getPagram((name = "hoangvinh"));
