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
