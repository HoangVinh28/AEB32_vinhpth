/* let n = prompt("Nhap so nguyen n :");
console.log(n);
let m = " "
for (let i = 1; i <= n; i++) {
   m = prompt("Nhap phan tu thu : ", i);
   console.log(m);
} */

/* let str = 1;
for (let j = 0; j < (n - 2) / 2; j++) {
  if (m != (m - 1 - j)) {
    str = 0;
  }
  if (str === 0) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
} */
/* if (n % 2 === 0) {
    for(let j = 0; j < (n/2); j++)
    {
        if(n != (n-i-1))
        {
            console.log("FALSE");
        }
        console.log("TRUE");
    }
}
else{
    for(let k = 0; k <= (n-1)/2; k++)
    {
        
        if(n != (n-i-1))
        {
            console.log("FALSE");
        }
        console.log("TRUE");
    }
}
 */
let n = prompt("Nhap so nguyen n :");
console.log(n);
/* let m = " "
for (let i = 1; i <= n; i++) {
   m = prompt("Nhap phan tu thu : ", i);
   console.log(m)
} */
function reverse_num(n){ 
    n = n.toString()
    return n.split("").reverse().join("");
  }
  function symmetrical_num(n){ 
    let flag =0;
    if (reverse_num(n) == n) flag = 1;
    return flag;
}
let check = symmetrical_num(n);
if( check == 1 ) console.log("TRUE");
else console.log("FALSE");
