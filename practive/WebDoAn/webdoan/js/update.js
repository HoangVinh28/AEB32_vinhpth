const URL_USER = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/picture";

let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser()
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmId = document.getElementById("inputId")
      let elmName = document.getElementById("inputName");
      let elmAvatar = document.getElementById("inputAvatar");
      elmId.value = data.id;
      elmName.value = data.name;
      elmAvatar.value = data.avatar;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function handleSubit() {
  console.log("handleSubit");
  let elmId = document.getElementById("inputId")
  let elmName = document.getElementById("inputName");
  let elmAvatar = document.getElementById("inputAvatar");

  let user = {
    id: elmId.value,
    name: elmName.value,
    avatar: elmAvatar.value,
  };
  if (id) {
    updateUser(user)
  }else{
    postUser(user);
  }
}
function postUser(user) {
  fetch(URL_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", },
      body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
    alert('Post success');
}
function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    alert('Update success');
  }

