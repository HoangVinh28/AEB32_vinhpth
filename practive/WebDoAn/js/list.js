let listPhuongTrang = [
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
  {
    Tuyến: "Quảng Nam --> Đà Nẵng",
    Giá: "100.000 VND/vé",
    STT: "9",
  },
];
let ListMaiLinh = [
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
  {
    Tuyến: "Đà Nẵng --> Huế",
    Giá: "100.000 VND/vé",
    STT: "9",
  },
];

let listThanhCong = [
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
    Tuyến: "Đà Nẵng --> Quảng Nam",
    Giá: "100.000 VND/vé",
    STT: "5",
  },
  {
    Tuyến: "Đà Nẵng --> Huế",
    Giá: "100.000 VND/vé",
    STT: "6",
  },
  {
    Tuyến: "Đà Nẵng --> Quảng Ngãi",
    Giá: "180.000 VND/vé",
    STT: "7",
  },
  {
    Tuyến: "Đà Nẵng --> Bình Định",
    Giá: "250.000 VND/vé",
    STT: "8",
  },
  {
    Tuyến: "Đà Nẵng --> Phú Yên",
    Giá: "320.000 VND/vé",
    STT: "9",
  },
];

let listNamPhuong = [
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
    Tuyến: "Quảng Nam --> Đà Nẵng",
    Giá: "100.000 VND/vé",
    STT: "5",
  },
  {
    Tuyến: "Quảng Nam --> Huế",
    Giá: "200.000 VND/vé",
    STT: "6",
  },
  {
    Tuyến: "Quảng Nam --> Quảng Ngãi",
    Giá: "100.000 VND/vé",
    STT: "7",
  },
  {
    Tuyến: "Đà Nẵng --> Quảng Trị",
    Giá: "250.000 VND/vé",
    STT: "8",
  },
];

const url = window.location.href;
const array_slipt = url.split("=");
let id_detail = "";
if (array_slipt.length > 0) {
  id_detail = array_slipt[1];
}

let headerDetail = document.getElementById("header_detail");
let elm = document.getElementById("table_detail");
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
