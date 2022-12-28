let listUser = [];
const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/users";

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    __renderUICard(data);
  })
  .catch((error) => {
    console.error("Error:", error);
    return error;
  });
function __renderUICard(users) {
  let elm = document.getElementById("tbody__user");
  let tempRowTable = "";
  function formatRowUser(user) {
    return `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.avatar}</td>
          <td>${user.city}</td>
          <td>
          <button class="btn btn-success" onClick ="gotoDetail(${user.id})">Detail</button>
          </td>
        </tr>`;
  }
  for (let index = 0; index < users.length; index++) {
    tempRowTable += formatRowUser(users[index]);
  }
  elm.innerHTML = tempRowTable;
}
function gotoDetail(userId) {
    console.log("gotoDetail", userId);
    window.location.href = `./detail.html?id=${userId}`;
  }