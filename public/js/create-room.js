// Async function to handle the submission of the CREATE ROOM form
const createRoomFormHandler = async (event) => {
  event.preventDefault();

  // Retrieving room name from form input
  const name = document.querySelector('#room-name-input').value.trim();

  // Checking if name was provided
  if (name) {
    // Sending a POST request to create the room
    const response = await fetch('/rooms/rooms/create-room', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Redirecting to the specific room page if the creation is successful
    if (response.ok) {

      // Getting the newly generated room id from the response
      const { roomData } = await response.json();
      // console.log(`\x1b[35m ${roomData} \x1b[0m`)
      const uuid = roomData.id;

      // Setting the location to the specified room
      document.location.replace(`/room/${uuid}`);
    } else {
      console.log(response.statusText);
    }
  }
};

// Function for redirecting to home page
const goToHome = () => {
  document.location.replace('/home')
}

// Event listener for create room button and home button
document.querySelector('#home-btn').addEventListener('click', goToHome);
document.querySelector('#create-room-form').addEventListener('submit', createRoomFormHandler);