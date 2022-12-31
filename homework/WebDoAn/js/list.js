let listPhuongTrang = [
  {
    name: "Đà Nẵng --> Quảng Nam",
    price: "100.000 VND/vé",
  },
  {
    name: "Đà Nẵng --> Huế",
    price: "100.000 VND/vé",
  },
  {
    name: "Quảng Nam --> Quảng Ngãi",
    price: "100.000 VND/vé",
  },
  {
    name: "Quảng Nam --> Bình Định",
    price: "200.000 VND/vé",
  },
  {
    name: "Quảng Nam --> Phú Yên",
    price: "280.000 VND/vé",
  },
];
let ListMaiLinh = [
    {
        name: "Đà Nẵng --> Quảng Nam",
        price: "100.000 VND/vé",
      },
      {
        name: "Đà Nẵng --> Huế",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Quảng Ngãi",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Bình Định",
        price: "200.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Phú Yên",
        price: "280.000 VND/vé",
      },
];

let listThanhCong = [
    {
        name: "Đà Nẵng --> Quảng Nam",
        price: "100.000 VND/vé",
      },
      {
        name: "Đà Nẵng --> Huế",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Quảng Ngãi",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Bình Định",
        price: "200.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Phú Yên",
        price: "280.000 VND/vé",
      },
];

let listNamPhuong = [
    {
        name: "Đà Nẵng --> Quảng Nam",
        price: "100.000 VND/vé",
      },
      {
        name: "Đà Nẵng --> Huế",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Quảng Ngãi",
        price: "100.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Bình Định",
        price: "200.000 VND/vé",
      },
      {
        name: "Quảng Nam --> Phú Yên",
        price: "280.000 VND/vé",
      },
];
postTickets(listPhuongTrang);
function postTickets(_tikets) {
    for (let index = 0; index < _tikets.length; index++) {
        const element = _tikets[index];
        console.log(element);
        let URL_POST = 'https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets'
        fetch(URL_POST, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(element),
          })
            .then((response) => response.json())
            .then((data) => {
              // console.log(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    }
}
const url = window.location.href;
const array_slipt = url.split("=");
let id_detail = "";
if (array_slipt.length > 0) {
  id_detail = array_slipt[1];
}
let headerDetail = document.getElementById("header_detail");
let elm = document.getElementById("table_detail");
function formatUI(tickets) {
  return `
      <tr>
          <th>${tickets.id}</th>
          <td>${tickets.name}</td>
          <td>${tickets.price}</td>
          <td><a href="./form.html" class="btn btn-warning"">Chọn Vé</a>
          <button class="btn btn-success" onClick ="gotoDetail(${tickets.id})">Detail</button>
          <button class="btn btn-danger" onClick ="deleteUser(${tickets.id})">Delete</button>
          </td>
      </tr>
      `;
}

function gotoDetail(userId) {
  console.log("gotoDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}
function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL_POST + "/" + userId;
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

  fetch(URL_POST, {
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
let tempUI = "";
let tempHeader = "";
if (id_detail === "45") {
  tempHeader = "Xe Phương Trang";
  for (let index = 0; index < listPhuongTrang.length; index++) {
    tempUI += formatUI(listPhuongTrang[index]);
  }
} else if (id_detail === "46") {
  tempHeader = "Xe Mai Linh";
  for (let index = 0; index < ListMaiLinh.length; index++) {
    tempUI += formatUI(ListMaiLinh[index]);
  }
} else if (id_detail === "47") {
  tempHeader = "Xe Thành Công";
  for (let index = 0; index < listThanhCong.length; index++) {
    tempUI += formatUI(listThanhCong[index]);
  }
} else if (id_detail === "48") {
  tempHeader = "Xe Nam Phương";
  for (let index = 0; index < listThanhCong.length; index++) {
    tempUI += formatUI(listThanhCong[index]);
  }
}

headerDetail.innerHTML = tempHeader;
elm.innerHTML = tempUI;
