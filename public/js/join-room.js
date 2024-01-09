// Async function to handle the submission of the JOIN ROOM form
const joinRoom = async (event) => {
    event.preventDefault();

    // Retrieving room code from form input
    const roomCode = document.querySelector('#code-input').value.trim()

    // Checking if input was provided
    if (roomCode) {
        // Sending GET request to make sure the room exists
        const response = await fetch(`/room/${roomCode}`, {
            method: 'GET',
            // method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        // If room exists, redirect the user to that room
        if (response.ok) {
            console.log(roomCode)
            document.location.replace(`/room/${roomCode}`);
        } else {
            console.log(response.statusText);
        }
    }
};

// Function for redirecting to home page
const goToHome = () => {
    document.location.replace('/home')
}

// Event listeners for join room btn and home btn
document.querySelector('#join-room-form').addEventListener('submit', joinRoom);
document.querySelector('#home-btn').addEventListener('click', goToHome);