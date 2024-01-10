const socket = io()

document.querySelector('#send-button').onclick = async (event) => {
  event.preventDefault();
  const currentURL = window.location.href
  const urlParts = currentURL.split('/')
  const roomCode = urlParts[urlParts.length - 1]
  //    await console.log(roomCode)

  const content = await document.querySelector('#message-input').value;
  const response = await fetch('/rooms/posts/new-chat', {
    method: 'POST',
    body: JSON.stringify({ content, roomCode }),
    headers: { 'Content-Type': 'application/json' },
  })
  // await console.log(content)
  await socket.emit('message', content);
  document.querySelector('#message-input').value = '';
}

socket.on('message', content => {

  const msgObject = JSON.parse(content)

  const realMessage = msgObject.msg
  const user = msgObject.sessionInfo.username
  console.log(realMessage, user)

  const messageBox = document.querySelector('#message-list')
  const el = document.createElement('p');
  el.innerHTML = `${user} - ${realMessage}`;
  messageBox.prepend(el);

  console.log('client side message: ', content)
});

// Function for redirecting to home page
const goToHome = () => {
  document.location.replace('/home')
}

// Event listener for home btn
document.querySelector('#home-btn').addEventListener('click', goToHome);

// Function for room code copy btn to work
document.addEventListener("DOMContentLoaded", function () {
  const roomCode = document.getElementById("room-code");
  const copyBtn = document.getElementById("copy-btn");

  copyBtn.addEventListener("click", function () {
    // Create a textarea element to hold the room code
    const textarea = document.createElement("textarea");
    textarea.value = roomCode.innerText;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    alert("Room code copied to clipboard!");
  });
});
