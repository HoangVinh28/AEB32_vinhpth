let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/users/2";

fetch(URL, {
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
  function formatUI(user) {
    return `
            <div class="card">
                <img src="${user.avatar}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">${user.name}</p>
                </div>
            </div>
        `;
  }
  let tempUI = "";
  /* for (let index = 0; index < List_User_Card.length; index++) {
    tempUI += formatUI(List_User_Card[index]);
  } */
  tempUI += formatUI(listUser);
  elm.innerHTML = tempUI;
}
