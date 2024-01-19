const socket = io()
var currentURL = window.location.href
var urlParts = currentURL.split('/') 
var roomCode = urlParts[urlParts.length - 1]

document.querySelector('#send-button').onclick = async (event) => {
  event.preventDefault();
  //    await console.log(roomCode)

  const content = await document.querySelector('#message-input').value;
  const response = await fetch('/rooms/posts/new-chat', {
    method: 'POST',
    body: JSON.stringify({ content, roomCode }),
    headers: { 'Content-Type': 'application/json' },
  })
  emitContent = JSON.stringify({
    msgContent: content,
    roomLocation: roomCode
  })
  // await console.log(content)
  await socket.emit('message', emitContent);
  document.querySelector('#message-input').value = '';
}

socket.on('message', content => {

  const msgObject = JSON.parse(content)
  const intermediary = JSON.parse(msgObject.msg)
  const realMessage = intermediary.msgContent
  const user = msgObject.sessionInfo.username

  const messageBox = document.querySelector('#message-list')
  const el = document.createElement('p');
  const userSpan = document.createElement('span')
  userSpan.innerHTML = `${user}:`
  userSpan.setAttribute('id', 'user-el')
  const messageSpan = document.createElement('span')
messageSpan.innerHTML = ` ${realMessage}`
messageSpan.setAttribute('id', 'message-el')
  el.appendChild(userSpan);
  el.appendChild(messageSpan);
  if (intermediary.roomLocation == window.location.href.split('/')[urlParts.length - 1]) { messageBox.prepend(el) };

  // console.log('client side message: ', msgObject)
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
