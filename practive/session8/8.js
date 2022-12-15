let str = prompt("Nhap chuoi n :");
console.log(str);
let res = "";
let convertArray = str.split(" ");
convertArray.forEach((element) => {
    res += countCharacter(element) + " ";
});
console.log(res.trim());
function countCharacter(string) {
  return string.length;
}
