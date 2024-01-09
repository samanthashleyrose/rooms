const socket = io(`ws://localhost:3001`)


document.querySelector('#send-button').onclick = () => {
    
    
    const text = document.querySelector('#message-input').value;
    console.log(text)
    socket.emit('message', text)
    
}

socket.on('message', text => {
    // const el = document.createElement('li');
    // el.innerHTML = text;
    // document.querySelector('ul').appendChild(el)
console.log('client side message: ', text)
});