let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);


const URL = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/agents/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderUI(card) {
  let elm = document.getElementById("info__card");
  elm.innerHTML = `
  <div class="img_agents">
  <h1>${card.name}</h1>  
  <h3>--${card.vitri}--</h3>
    <img src="${card.avatar}" width="300px" height="500px" alt="">
  </div>
  <div class="skill_agents d_flex">
    <div class="skill_q bd_r p-2">
      <h6>Q — ${card.q}</h6>
      <li><img
          src="${card.imgq}">
      </li>
      <p>${card.detailq}
      </p>
    </div>
    <div class="skill_c bd_r p-2">
      <h6>C — ${card.c}</h6>
      <li><img 
          src="${card.imgc}">
      </li>
      <p>${card.detailc}</p>
    </div>
    <div class="skill_e bd_r p-2">
      <h6>E — ${card.e}</h6>
      <li><img 
        src="${card.imge}"></li>
        <p>${card.detaile}</p>
      </div> 
    <div class="skill_x p-2">
      <h6>X — ${card.x}</h6>
      <li><img 
        src="${card.imgx}"></li>
        <p>${card.detailx}</p>
      </div>
    </div>`;
}

function goToDetail(card) {
  console.log("goToDetail", card);
  window.location.href = `./list.html?id=${card}`;
}
