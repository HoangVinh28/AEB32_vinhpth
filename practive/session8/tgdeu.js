// star --> 2*index-1-->h-index
let h = prompt("Nhap h :");
console.log(h);
for (let i = 0; i <= h; i++) {
  let str = " ";
  let a = " ";
  for (let k = h; k > i; k--) {
    a += " ";
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    str += "*";
  }
  let b = a + str;
  console.log(b);
}
