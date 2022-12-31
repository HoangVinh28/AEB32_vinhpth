/* let listPhuongTrang = [
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
]; */

/* postTickets(listPhuongTrang);
function postTickets(tickets) {
  for (let index = 0; index < tickets.length; index++) {
    const element = tickets[index];
    console.log(element);
    let URL_POST = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
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
} */

const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets";
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    __renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
    return error;
  });
function __renderUI(tickets) {
  let elm = document.getElementById("table_detail");
  let tempRowTable = "";
  function formatRowUser(ticket) {
    return `<tr>
            <td>${ticket.id}</td>
            <td>${ticket.name}</td>
            <td>${ticket.price}</td>
            <td>
              <button class="btn btn-success" onClick ="gotoDetail(${ticket.id})">Detail</button>
              <button class="btn btn-danger" onClick ="deleteTicket(${ticket.id})">Delete</button>
            </td>
          </tr>`;
  }
  for (let index = 0; index < tickets.length; index++) {
    tempRowTable += formatRowUser(tickets[index]);
  }
  elm.innerHTML = tempRowTable;
}
function handleClickRow(ticketId) {
  console.log("handleClickRow", ticketId);
  window.location.href = `./detail.html?id=${ticketId}`;
}
function gotoDetail(ticketId) {
  console.log("gotoDetail", ticketId);
  window.location.href = `./detail.html?id=${ticketId}`;
}
function deleteTicket(ticketId) {
  console.log("deleteTicket");
  let ticket_delete = URL + "/" + ticketId;
  fetch(ticket_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      __renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      __renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      return error;
    });
}
