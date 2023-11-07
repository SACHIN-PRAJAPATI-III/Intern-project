
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulated password hashing (client-side, not secure for production)
            const hashedPassword = btoa(password);

            // Send the username and hashedPassword to the server for validation
            // In a real application, you would make an AJAX request to the server.
            // For simplicity, we'll just log the values here.
            console.log('Username:', username);
            console.log('Hashed Password:', hashedPassword);

            // Reset the form
            document.getElementById('login-form').reset();
        })


