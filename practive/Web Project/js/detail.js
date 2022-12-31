let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2de3113e5a5c3d35ba.mockapi.io/tickets/" + id;
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfo(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfo(ticket) {
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
  <tr>
    <th>${ticket.id}</th>
    <td>${ticket.name}</td>
    <td>${ticket.price}</td>
    <td>
        <a href="./form.html" class="btn btn-warning"">Thêm vé</a>
    </td>
  </tr>  
      `;
}
