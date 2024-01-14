// Async function to handle the submission of the signup form
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Retrieving name, email, and password from form inputs
  const name = document.querySelector('#name-input').value.trim();
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#pass-input').value.trim();

  console.log(name, email, password)

  // Checking if name, email, and password are provided
  if (name && email && password) {
    // Sending a POST request to sign up the user
    const response = await fetch('/rooms/users/sign-up', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Redirecting to the home page if the signup is successful; showing an alert otherwise
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert('Password needs to be at least 8 characters');
    }
  }
};

// Event listener for sign up button
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);