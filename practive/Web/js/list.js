/* let elm = document.getElementById("tbody__user");

let listUser = [
  {
    id: 1,
    name: "name 1",
    age: 10,
    //src :'./abc.png'
  },
  {
    id: 2,
    name: "name 2",
    age: 30,
  },
  {
    id: 3,
    name: "name 3",
    age: 30,
  },
  {
    id: 4,
    name: "name 4",
    age: 34,
  },
  {
    id: 5,
    name: "name 5",
    age: 40,
  },
];
let tempRowTable = "";

for (let index = 0; index < listUser.length; index++) {
  tempRowTable += formatRowUser(listUser[index]);
}
function formatRowUser(user) {
  return `<tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
        </tr>`;
}
elm.innerHTML = tempRowTable; */
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
          <button class="btn btn-danger" onClick ="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>`;
  }
  for (let index = 0; index < users.length; index++) {
    tempRowTable += formatRowUser(users[index]);
  }
  elm.innerHTML = tempRowTable;
}
function handleClickRow(userId) {
  console.log("handleClickRow", userId);
  window.location.href = `./detail.html?id=${userId}`;
}
function gotoDetail(userId) {
  console.log("gotoDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}
function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      __renderUICard(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });

    
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
}
