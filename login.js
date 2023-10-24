function loginForm() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!email.match(emailPattern)) {
        alert("Invalid email address");
        return false;
    }

    if (!password.match(passwordPattern)) {
        alert("Invalid password. It should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number.");
        return false; // Do not proceed with the form submission
    }

    return true; // Criteria met, allow form submission
}
