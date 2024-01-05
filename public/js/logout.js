// Async function to handle the user logout
const logout = async () => {
    // Sending a POST request to log out the user
    const response = await fetch('/rooms/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // Redirecting to the home page if the logout is successful; showing an alert otherwise
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  // Event listener for the logout button click
  document.querySelector('#logout').addEventListener('click', logout);