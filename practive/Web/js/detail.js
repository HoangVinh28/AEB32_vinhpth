let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/users/" + id;
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfoUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfoUser(user) {
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
          <p>${user.id}</p>
          <p>${user.name}</p>
          <p>${user.city}</p>
          <p>${user.avatar}</p>    
      `;
}

/* fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    __renderUICard(data);
  })
  .catch((error) => {
    console.error("Error:", error);
    return error;
  });
function __renderUICard(listUser) {
  let elm = document.getElementById("div__ben");
  elm.innerHTML = `
            <div class="card">
                <img src="${user.avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${user.name}</p>
                </div>
            </div>
        `;
  }
  
  /* for (let index = 0; index < List_User_Card.length; index++) {
    tempUI += formatUI(List_User_Card[index]);
  } */
