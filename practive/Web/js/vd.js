/* function vd1() {
    const LIST_USER = [
      {
        id: 1,
        name: "name 1",
        age: 18,
        address: "address 1",
      },
      {
        id: 2,
        name: "name 2",
        age: 18,
        address: "address 2",
      },
      {
        id: 3,
        name: "name 3",
        age: 18,
        address: "address 3",
      },
    ];
  
    let elmBodyTable = document.getElementById("tbody__user");
    console.log(elmBodyTable);
    let resRow = "";
  
    for (let index = 0; index < LIST_USER.length; index++) {
      resRow += formatRowUser(LIST_USER[index]);
    }
  
    function formatRowUser(_user) {
      return `
          <tr>
              <td>${_user.id}</td>
              <td>${_user.name}</td>
              <td>${_user.age}</td>
              <td>${_user.address}</td>
          </tr>
      `;
    }
  
    elmBodyTable.innerHTML = resRow; */
// get elm body table
// dummy data row `<tr><td>1</td><td>2</td></tr>`
// elm.innerHTML -> render row table -> table co 1 row data

// for -> render 5 row

// dummy listUser -> for listUser -> render data row listUser

/* function vd2() { */
/* const LIST_USER_CARD = [
      {
        name: "Carlos Wilkinson",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg",
        city: "Nigelshire",
        id: "45",
      },
      {
        name: "Lorraine Zemlak",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
        city: "Amiyachester",
        id: "46",
      },
      {
        name: "Dr. Lola Goodwin Jr.",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/373.jpg",
        city: "Leannonbury",
        id: "47",
      },
      {
        name: "Jonathon Wehner",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg",
        city: "Sincerefort",
        id: "48",
      },
      {
        name: "Gertrude Nienow",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
        city: "Draper",
        id: "49",
      },
      {
          name: "Gertrude Nienow",
          avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg",
          city: "Draper",
          id: "49",
        },
    ];
   */
let listUser = [];
const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/users/1";
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
  let elm = document.getElementById("div__content");
  function formatUICard(user) {
    return `
      <div class="card col-4">
          <img
              src="${user.avatar}"
              ,
              class="card-img-top"
              alt="..."
          />
          <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </p>
              <a href="./form.html" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      `;
  }
  let resUI = "";
  resUI += formatUICard(listUser);
  elm.innerHTML = resUI;
}

