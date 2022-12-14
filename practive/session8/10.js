let n = prompt("Nhap so lit xang can mua :")
console.log(n);
let a = prompt("nhap a :")
let b = prompt("nhap b :")
console.log(a,b);
/* if( n%2===0 )
{
    console.log( n/2 );
}
if (n%2 === 1) {
    m = (n/2)+1;
    m = parseInt(m);
    console.log(m);
}
 */
/* parseInt(n/2)*b + [n - (parseInt(n/2)*b)]*a
parseInt(n/2)*b + a*n - parseInt(n/2)*b*a 
parseInt(n/2)*b*(1-a) + a*n*/

if((2*a) >= b)
{
console.log( parseInt(n/2) * b + (n%2) *a);
}
else{
    console.log(n*a);
}