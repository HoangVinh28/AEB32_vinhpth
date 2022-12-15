//toUpercase : viet hoa
/* /* let z ='aBCD'
console.log(z.slice(0,1).toUpperCase() + z.slice(1).toLowerCase());/ * */
let str = prompt("Nhap chuoi n :");
console.log(str);
let res = "";
let convertArray = str.split(" ");
convertArray.forEach((element) => {
  res += capitalizeFirstLetter(element) + " ";
});
console.log(res.trim());
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
/*  function countCharacter(string) {
    return string.length;
  } */
