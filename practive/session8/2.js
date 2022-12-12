let a = prompt("nhap so nguyen a:");
let b = prompt("nhap so nguyen b :");
let c = prompt("nhap so nguyen c");
let d = prompt("nhap so nguyen d");
console.log(a, b, c, d);
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);
min = a;
if (min > b) {
  min = b;
}
if (min > c) {
  min = c;
}
if (min > d) {
  min = d;
}
console.log("Gia tri nho nhat la : ", min);

/* function bt2() {
    
    console.log(bt2);
} */
