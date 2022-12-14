let n = prompt("Nhap so nguyen n : ");
if (n < 2) {
  console.log("n ko phai SNT");
}
count = 0;
for (let i = 2; i < n - 1; i++) {
  if (n % i === 0) {
    count++;
  }
}
if (count === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
// cach 2
/* function checkNT(number) {
    let isNT = true; // gia su n la so nguyen to
    for (let index = 2; index < n; index++) {
        if (number % index === 0) {
            isNT = false;
        } 
    }
    return isNT
}
let res = checkNT()
console.log(res); */