// Function to redirect the page to the CREATE A ROOM page
const goToCreateRoom = () => {
  document.location.replace("/create-room");
};

// Function to redirect the page to the JOIN A ROOM page
const goToJoinRoom = () => {
  document.location.replace("/join-room");
};

const goToProfile = () => {
  document.location.replace("/profile");
};
document.querySelector("#profile-btn").addEventListener("click", goToProfile);
document
  .querySelector("#nav-join-room-btn")
  .addEventListener("click", goToJoinRoom);
document
  .querySelector("#nav-create-room-btn")
  .addEventListener("click", goToCreateRoom);

const list = document.querySelector("#room-list");

const currentURL = window.location.href;
const urlParts = currentURL.split("/");

function addRoomToMenu(roomName) {
  // const roomMenu = document.getElementById("room-list");
  const response = fetch("/rooms/users/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the data and update the menu if needed
      console.log(data);
      localStorage.setItem("username",`${data.name}`)
      localStorage.setItem("email", `${data.email}`)
      for (x = 0; x < data.rooms.length; x++) {
        data.rooms[x].name;
        const createP = document.createElement("a");
        // const createBr = document.createElement("br");
        let roomURL = `${urlParts[0]}/room/${data.rooms[x].id}`;
        createP.href = roomURL;
        createP.innerHTML = data.rooms[x].name;
        list.appendChild(createP);
        // list.appendChild(createBr);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

addRoomToMenu();
