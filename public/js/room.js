const socket = io(`ws://localhost:3001`)


document.querySelector('#send-button').onclick = async () => {
    const currentURL = window.location.href
    const urlParts = currentURL.split('/')
    const roomCode = urlParts[urlParts.length -1]
//    await console.log(roomCode)
    
    const content = await document.querySelector('#message-input').value;
    const response = await fetch('/rooms/posts/new-chat', {
        method: 'POST',
        body: JSON.stringify({content, roomCode}),
        headers: { 'Content-Type': 'application/json' },
      })
    await console.log(content)
    await socket.emit('message', content)
}

socket.on('message', content => {

    const messageBox = document.querySelector('#message-list')
    const el = document.createElement('li');
    el.innerHTML = content;
    messageBox.appendChild(el)
console.log('client side message: ', content)
});