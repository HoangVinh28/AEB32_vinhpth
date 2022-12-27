let List_User_Card = [
  {
    name: "Bến xe Gia Lâm",
    src: "./image/BenXeGiaLam.jpg",
    id: "1",
  },
  {
    name: "Bến xe Miền Đông",
    src: "./image/BenXeMienDong.jpg",
    id: "2",
  },
  {
    name: "Bến xe Miền Tây",
    src: "./image/BenXeMienTay.jpg",
    id: "3",
  },
  {
    name: "Bến xe Mỹ Đình",
    src: "./image/BenXeMyDinh.jpg",
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
    avatar: "./image/Xe-Phuong-Trang.jpg",
    id: "45",
  },
  {
    text: "Xe Mai Linh",
    avatar: "./image/Xe-Mai-Linh.jpg",
    id: "46",
  },
  {
    text: "Xe Thành Công",
    avatar: "./image/Xe-Thanh-Cong.jpg",
    id: "47",
  },
  {
    text: "Xe Nam Phương",
    avatar: "./image/Xe-Nam-Phương.jpg",
    id: "48",
  },
];

let elmBody = document.getElementById("home");

function formatUICard(comments) {
  return `
          <div class="card" style="width: 18rem;">
            <img src="${comments.avatar}" class="card-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">${comments.text}</h5>
              <p class="card-text">
                <ul>
                    <li>Tuyến 5h</li>
                    <li>Tuyến 7h</li>
                    <li>Tuyến 9h</li>
                </ul>
              </p>
              <button class="btn btn-success" onClick ="gotoList(${comments.id})">Xem chi tiết</button>
            </div>
          </div>
    `;
}

let resUI = "";
for (let index = 0; index < LIST_USER.length; index++) {
  resUI += formatUICard(LIST_USER[index]);
}

elmBody.innerHTML = resUI;
function gotoList(commentsId) {
  console.log("gotoList", commentsId);
  window.location.href = `./list.html?id=${commentsId}`;
}
