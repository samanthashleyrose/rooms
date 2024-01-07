// Function to redirect the page to the CREATE A ROOM page 
const goToCreateRoom = () => {
    document.location.replace('/create-room')
  }

  // Function to redirect the page to the JOIN A ROOM page 
const goToJoinRoom = () => {
    document.location.replace('/join-room')
  }

  document.querySelector('#nav-join-room-btn').addEventListener('click', goToJoinRoom);
  document.querySelector('#nav-create-room-btn').addEventListener('click', goToCreateRoom);