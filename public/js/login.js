// Async function to handle the submission of the login form
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Retrieving email and password from form inputs
  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#pass-input').value.trim();

  // Checking if both email and password are provided
  if (email && password) {
    // Sending a POST request to log in the user
    const response = await fetch('/rooms/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Redirecting to the home page if the login is successful
    // Console logging response otherwise
    if (response.ok) {
      document.location.replace('/home');
    } else {
      console.log(response.statusText);
    }
  }
};

const goToSignup = () => {
  console.log('signupbtn')
  document.location.replace('/sign-up')
}

// Event listener for login button form submission
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#sign-up-btn').addEventListener('click', goToSignup);