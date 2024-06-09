const loginFormHandler = async (event) => {
    event.preventDefault();

    // Get values from the login.handlebars
    const email = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

// the sign up form 
const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

// adding event listeners to log in button and sign up button.
    document
        .querySelector('.login-form')
        .addEventListener('submit', loginFormHandler);

    document
        .querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);