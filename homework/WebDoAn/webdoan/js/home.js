const LIST_USER = "https://63a06c2124d74f9fe837cb19.mockapi.io/api/v1/picture";

getListCard();
function _renderUI(card) {
  let elm = document.getElementById("div_card");
  /* let listCard = [
    {
        "name": "Astra",
        "avatar": "https://images7.alphacoders.com/113/thumb-1920-1134343.png",
        "id": "1",
    },
    {
        "name": "Breach",
        "avatar": "https://images3.alphacoders.com/114/thumb-1920-1149739.jpg",
        "id": "2",
    },
    {
        "name": "Brimstone",
        "avatar": "https://wallpaperaccess.com/full/5400400.jpg",
        "id": "3",
    },
    {
        "name": "Chamber",
        "avatar": "https://i.pinimg.com/originals/54/50/10/545010aade9f6e90db301bcd0b17a612.jpg",
        "id": "4",
    },
    {
        "name": "Cypher",
        "avatar": "https://images.hdqwalls.com/download/cypher-valorant-4k-game-d1-3840x2160.jpg",
        "id": "5",
    },
    {
        "name": "Fade",
        "avatar": "https://cdn1.dotesports.com/wp-content/uploads/2022/04/18121642/Fade-Valorant-1536x864.jpeg",
        "id": "6",
    },
    {
        "name": "Harbor",
        "avatar": "https://i.ex-cdn.com/mgn.vn/files/content/2022/11/04/3-lightbackground-_-green_harbor-1643.jpg",
        "id": "7",
    },
    {
        "name": "Jett",
        "avatar": "https://images.hdqwalls.com/wallpapers/jett-valorant-4k-k4.jpg",
        "id": "8",
    },
    {
        "name": "Kayo",
        "avatar": "https://i.ytimg.com/vi/MpEo87Mp9O0/maxresdefault.jpg",
        "id": "9",
    },
    {
        "name": "Killjoy",
        "avatar": "https://wallpapercave.com/wp/wp7539503.png",
        "id": "10",
    },
    {
        "name": "Neon",
        "avatar": "https://digiskygames.com/wp-content/uploads/2022/01/Valorants-Episode-4-patch-adds-Neon-to-the-game-and-nerfs-the-Spectre.jpg",
        "id": "11",
    },
    {
        "name": "Omen",
        "avatar": "https://images.hdqwalls.com/download/omen-valorant-bf-1280x800.jpg",
        "id": "12",
    },
    {
        "name": "Phoenix",
        "avatar": "https://gamezo.co.uk/wp-content/uploads/2021/01/phoenix-valorant-uhdpaper.com-4K-5.2432-wp.thumbnail.jpg",
        "id": "13",
    },
    {
        "name": "Raze",
        "avatar": "https://wallpaperaccess.com/full/3383807.png",
        "id": "14",
    },
    {
        "name": "Reyna",
        "avatar": "https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2021/01/reyna-valorant-agent.jpg",
        "id": "15",
    },
    {
        "name": "Sage",
        "avatar": "https://images.hdqwalls.com/download/sage-valorant-cl-1280x1024.jpg",
        "id": "16",
    },
    {
        "name": "Skye",
        "avatar": "https://i.ytimg.com/vi/JqfChYUMrqQ/maxresdefault.jpg",
        "id": "17",
    },
    {
        "name": "Sova",
        "avatar": "https://images.hdqwalls.com/download/sova-valorant-4k-vr-3840x2160.jpg",
        "id": "18",
    },
    {
        "name": "Viper",
        "avatar": "https://i.ytimg.com/vi/Lmgj1b81iLI/maxresdefault.jpg",
        "id": "19",
    },
    {
        "name": "Yoru",
        "avatar": "https://4kwallpapers.com/images/wallpapers/yoru-valorant-stealth-agent-pc-games-dark-background-1366x768-4120.png",
        "id": "20",
    },

]; */

  function formatCard(card) {
    return `
      <td>
        <button class="btn btn-success" onclick="goToDetail(${card.id})">Detail</button>
      </td>
    `;
  }
  function formatCard(card) {
    return `
  <div  class="card" style="width: 250px;">
  <img src="${card.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;">${card.name}</h5>
    <button class="btn-success m-2" onclick="handleClickRow(${card.id})">More</button>
    <button class="btn-info m-2" onclick="handleEdit(${card.id})">Edit</button>
    <button class="btn-danger m-2" onclick="deleteUser(${card.id})">Delete</button>
    </div>
  
</div> `;
  }
  let temp = "";
  for (let index = 0; index < card.length; index++) {
    temp += formatCard(card[index]);
  }
  elm.innerHTML = temp;
}

function getListCard() {
  fetch(LIST_USER, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      _renderUI(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
function deleteUser(cardId) {
  console.log("deleteUser");
  let user_delete = LIST_USER + "/" + cardId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListCard();
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    alert('Delete success')
  }

function handleEdit(cardId) {
  console.log("handleEdit", cardId);
  window.location.href = `./update.html?id=${cardId}`;
}

function handleClickRow(cardId) {
  console.log("handleClickRow", cardId);
  window.location.href = `./list.html?id=${cardId}`;
}
