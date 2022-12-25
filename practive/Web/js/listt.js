let ListUseCard = [
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
    <td><button>Chọn vé</button></td>
    </tr>
      `;
}
let tempUI = "";
for (let index = 0; index < ListUseCard.length; index++) {
  tempUI += formatUI(ListUseCard[index]);
}
elm.innerHTML = tempUI;
