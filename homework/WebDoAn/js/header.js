window.onload = function () {
  loadHeader();
};
function loadHeader() {
  let elm = document.getElementById("header");
  fetch("./header.html")
    .then((response) => response.text())
    .then((data) => {
      elm.innerHTML = data;
      console.log(data);
    });
}
