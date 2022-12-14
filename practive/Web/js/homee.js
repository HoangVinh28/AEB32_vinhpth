let List_User_Card = [
  {
    name: "Bến xe Gia Lâm",
    src: "./BenXeGiaLam.jpg",
    id: "1",
  },
  {
    name: "Bến xe Miền Đông",
    src: "./BenXeMienDong.jpg",
    id: "2",
  },
  {
    name: "Bến xe Miền Tây",
    src: "./BenXeMienTay.jpg",
    id: "3",
  },
  {
    name: "Bến xe Mỹ Đình",
    src: "BenXeMyDinh.jpg",
    id: "4",
  },
];
let elm = document.getElementById("div__ben");
function formatUI(user) {
  return `
        <div class="card">
            <img src="${user.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${user.name}</p>
            </div>
        </div>
    `;
}
let tempUI = "";
for (let index = 0; index < List_User_Card.length; index++) {
  tempUI += formatUI(List_User_Card[index]);
}
elm.innerHTML = tempUI;

let LIST_USER = [
  {
    text: "Xe Phương Trang",
    avatar: "./th.jpg",
    id: "45",
  },
  {
    text: "Xe Thanh Tỉnh",
    avatar: "./th.jpg",
    id: "46",
  },
  {
    text: "Xe Hòa Thuận",
    avatar: "./th.jpg",
    id: "47",
  },
  {
    text: "Xe Hòa Hiệp",
    avatar: "./th.jpg",
    id: "48",
  },
];

let elmBody = document.getElementById("div__nha");

function formatUICard(comments) {
  return `
          <div class="card" style="width: 18rem;">
            <img src="${comments.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${comments.text}</h5>
              <p class="card-text">
                <ul>
                    <li>Tuyến 5h</li>
                    <li>Tuyến 7h</li>
                    <li>Tuyến 9h</li>
                    <li>Tuyến 11h</li>
                </ul>
              </p>
              <a href="#" class="btn btn-primary">Xem chi tiết</a>
            </div>
          </div>
    `;
}

let resUI = "";
for (let index = 0; index < LIST_USER.length; index++) {
  resUI += formatUICard(LIST_USER[index]);
}

elmBody.innerHTML = resUI;
