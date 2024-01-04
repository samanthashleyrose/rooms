// var users
async function getAllUsers() {
   let users
    try {
        const response = await fetch('/rooms/users', {
            method: 'GET'
        });
        users = await response.json()
        // console.log(users)
        // return users
    }
    catch (err) {
        console.log(err)
    }
    // const lettuce = Promise.resolve(users)
    return users
}
// var user = getAllUsers()
// console.log(user)
getAllUsers().then(console.log)