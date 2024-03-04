function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var loginMessage = document.getElementById('login-message');
    var logoutBtn = document.getElementById('logout-btn');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.innerText = 'Please enter both username and password.';
        loginMessage.innerText = '';
        return;
    }

    // Check for '@' symbol in the username
    if (!username.includes('@')) {
        errorMessage.innerText = 'Username must contain the @ symbol.';
        loginMessage.innerText = '';
        return;
    }

    // Simulating authentication (replace with server-side logic)
    if (username === 'user@gmail.com' && password === '12345678') {
        errorMessage.innerText = '';
        loginMessage.innerText = 'Thank you for Login!';
        logoutBtn.style.display = 'inline'; // Show logout button
    } else {
        errorMessage.innerText = 'Incorrect username or password.';
        loginMessage.innerText = '';
        logoutBtn.style.display = 'none'; // Hide logout button
    }
}

function logout() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').innerText = '';
    document.getElementById('login-message').innerText = '';
    document.getElementById('logout-btn').style.display = 'none'; // Hide logout button
}
