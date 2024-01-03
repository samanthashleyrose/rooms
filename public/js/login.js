async function login() {
    try{const response = await fetch('/rooms/users', {
        method: 'GET'
    });
    const users = await response.json()
    console.log(users)
}
    catch(err){
        console.log(err)
    }
    // const lettuce = Promise.resolve(users)
    // return user
}
// var user = login()
// console.log(user)