let m = prompt("Nhap so nguyen m : ")
let n = prompt("Nhap so nguyen n : ")
console.log(m,n);
if(m === 0 || n === 0)
{
    console.log(m+n);
}
while (m != n) {
    if (m > n) {
        m = m - n;
    }
    else{
        n = n - m;
    }
}
console.log(m);