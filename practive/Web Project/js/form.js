const URL_UPDATE = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser();
}

function getUser() {
  fetch(`${URL_UPDATE}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmName = document.getElementById("inputName");
      let elmPrice = document.getElementById("inputPrice");
      elmName.value = data.name;
      elmPrice.value = data.price;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubit() {
  let elmName = document.getElementById("inputName");
  let elmPrice = document.getElementById("inputPrice");

  let user = {
    name: elmName.value,
    price: elmPrice.value,
  };
  if (id) {
    updateUser(user);
  } else {
    postUser(user);
  }
}

function postUser(user) {
  console.log("postUser");
  fetch(URL_UPDATE, {
    method: "POST",
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
}

function updateUser(user) {
  fetch(`${URL_UPDATE}/${id}`, {
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
}
