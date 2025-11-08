document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    if (emailOrPhone && password) {
        // In a real application, you would send this data to a server for validation.
        alert(Attempting to log in with:\nEmail/Phone: ${emailOrPhone}\nPassword: ${password}\n\n(This is a client-side alert for demonstration.));

        // Optionally clear the form after "submission"
        // this.reset();
    } else {
        alert('Please fill in both fields.');
    }
});