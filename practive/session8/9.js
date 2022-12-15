let n = prompt("Nhap so nguyen n :");
if (n < 2) {
  console.log("n ko phai SNT");
}
let a = n;
for (let i = 2; i <= n; i++) {
  let dem = 0;
  while (n % i === 0) {
    ++dem;
    n /= i;
  }
  if (dem) {
    let ar = [i, dem];
    console.log(ar[0]);
    
    if (dem > 1) {
        console.log("^", ar[1]);
        const dem = ar[0] * ar[1];
        console.log("*");
    } 
    
    if (n > i) {
      console.log("*");
    }
  }
  /* if (dem) {
    c = i;
    if (dem > 1) {
        a = dem;
    }
    if (n > i) {
        b = "*";
    }
    let str = c + a + b;
    console.log(str);
  }*/
} 

let count = 0;
for (let j = 1; j <= a; j++) {
  if (a % j == 0) {
    count++;
  }
}
console.log(count);
