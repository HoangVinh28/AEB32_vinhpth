let h = prompt("Nhap h :");
console.log(h);
//cach 1 : sai
/* let str = " ";
for (let i = 1; i <= h; i++) {
  str += "*";
  for (let j = 1; j <= i; j++) {
    console.log(str," ");
  }
} */

//cach 2 : dung

for (let i = 1; i <= h; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
