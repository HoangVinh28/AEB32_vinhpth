let ListUserCard = [
  {
    Tuyến: "Đà Nẵng --> Quảng Nam",
    Giá: "100.000 VND/vé",
    STT: "1",
  },
  {
    Tuyến: "Đà Nẵng --> Huế",
    Giá: "100.000 VND/vé",
    STT: "2",
  },
  {
    Tuyến: "Đà Nẵng --> Quảng Ngãi",
    Giá: "180.000 VND/vé",
    STT: "3",
  },
  {
    Tuyến: "Đà Nẵng --> Bình Định",
    Giá: "250.000 VND/vé",
    STT: "4",
  },
  {
    Tuyến: "Đà Nẵng --> Phú Yên",
    Giá: "320.000 VND/vé",
    STT: "5",
  },
  {
    Tuyến: "Đà Nẵng --> Quảng Bình",
    Giá: "350.000 VND/vé",
    STT: "6",
  },
  {
    Tuyến: "Đà Nẵng --> Quảng Trị",
    Giá: "250.000 VND/vé",
    STT: "7",
  },
  {
    Tuyến: "Đà Nẵng --> Hà Tĩnh",
    Giá: "450.000 VND/vé",
    STT: "8",
  },
];
let elm = document.getElementById("table_dn");
function formatUI(user) {
  return `
        <tr>
            <th>${user.STT}</th>
            <td>${user.Tuyến}</td>
            <td>${user.Giá}</td>
            <td><a href="./form.html" class="btn btn-warning"">Chọn Vé</a></td>
        </tr>
        `;
}
let tempUI = "";
for (let index = 0; index < ListUserCard.length; index++) {
  tempUI += formatUI(ListUserCard[index]);
}
elm.innerHTML = tempUI;

let ListUser = [
  {
    Tuyến: "Quảng Nam --> Đà Nẵng",
    Giá: "100.000 VND/vé",
    STT: "1",
  },
  {
    Tuyến: "Quảng Nam --> Huế",
    Giá: "200.000 VND/vé",
    STT: "2",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Ngãi",
    Giá: "100.000 VND/vé",
    STT: "3",
  },
  {
    Tuyến: "Quảng Nam --> Bình Định",
    Giá: "200.000 VND/vé",
    STT: "4",
  },
  {
    Tuyến: "Quảng Nam --> Phú Yên",
    Giá: "280.000 VND/vé",
    STT: "5",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Trị",
    Giá: "350.000 VND/vé",
    STT: "6",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Bình",
    Giá: "450.000 VND/vé",
    STT: "7",
  },
  {
    Tuyến: "Quảng Nam --> Hà Tĩnh",
    Giá: "550.000 VND/vé",
    STT: "8",
  },
];

let elmBody = document.getElementById("table_qn");

function formatUICard(comments) {
  return `
        <tr>
            <th>${comments.STT}</th>
            <td>${comments.Tuyến}</td>
            <td>${comments.Giá}</td>
            <td><a href="./form.html" class="btn btn-warning"">Chọn Vé</a></td>
        </tr>
      `;
}

let resUI = "";
for (let index = 0; index < ListUser.length; index++) {
  resUI += formatUICard(ListUser[index]);
}

elmBody.innerHTML = resUI;

let List__Articles = [
  {
    Tuyến: "Quảng Nam --> Đà Nẵng",
    Giá: "100.000 VND/vé",
    STT: "1",
  },
  {
    Tuyến: "Quảng Nam --> Huế",
    Giá: "200.000 VND/vé",
    STT: "2",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Ngãi",
    Giá: "100.000 VND/vé",
    STT: "3",
  },
  {
    Tuyến: "Quảng Nam --> Bình Định",
    Giá: "200.000 VND/vé",
    STT: "4",
  },
  {
    Tuyến: "Quảng Nam --> Phú Yên",
    Giá: "280.000 VND/vé",
    STT: "5",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Trị",
    Giá: "350.000 VND/vé",
    STT: "6",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Bình",
    Giá: "450.000 VND/vé",
    STT: "7",
  },
  {
    Tuyến: "Quảng Nam --> Hà Tĩnh",
    Giá: "550.000 VND/vé",
    STT: "8",
  },
];

let elmTable = document.getElementById("table_hue");

function formatBody(articles) {
  return `
          <tr>
              <th>${articles.STT}</th>
              <td>${articles.Tuyến}</td>
              <td>${articles.Giá}</td>
              <td><a href="./form.html" class="btn btn-warning"">Chọn Vé</a></td>
          </tr>
        `;
}

let temp = "";
for (let index = 0; index < List__Articles.length; index++) {
  temp += formatBody(List__Articles[index]);
}

elmTable.innerHTML = temp;
/* <button class="btn btn-warning">Chọn vé</button> */