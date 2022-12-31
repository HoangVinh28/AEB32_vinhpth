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
let elm = document.getElementById("bus_station");
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

/* let LIST_CAR = [
  {
    name: "Xe Phương Trang",
    avatar: "./image/Xe-Phuong-Trang.jpg",
  },
  {
    name: "Xe Mai Linh",
    avatar: "./image/Xe-Mai-Linh.jpg",
  },
  {
    name: "Xe Thành Công",
    avatar: "./image/Xe-Thanh-Cong.jpg",
  },
  {
    name: "Xe Nam Phương",
    avatar: "./image/Xe-Nam-Phương.jpg",
  },
];
postCars(LIST_CAR);
function postCars(cars) {
  for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
    let URL_POST = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/cars";
    fetch(URL_POST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(element),
    })
      .then((response) => response.json())
      .then((data) => {
    
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
} */
const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/cars";
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
function __renderUICard(cars) {
  let elmBody = document.getElementById("home");
  function formatUICard(car) {
    return `
            <div class="card" style="width: 18rem;">
              <img src="${car.avatar}" class="card-img" alt="...">
              <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">
                  <ul>
                      <li>Tuyến 5h</li>
                      <li>Tuyến 7h</li>
                      <li>Tuyến 9h</li>
                  </ul>
                </p>
                <a href="./list.html" class="btn btn-success">Xem chi tiết</a>
                
              </div>
            </div>
      `;
  }
  let resUI = "";
  for (let index = 0; index < cars.length; index++) {
    resUI += formatUICard(cars[index]);
  }
  elmBody.innerHTML = resUI;
}

