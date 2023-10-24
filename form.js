function updatePasswordStrength(passwordStrengthElement, password) {
    var passwordStrength = "weak";
    var passwordMaxLength = 12; // The maximum password length

    if (password.length >= passwordMaxLength) {
        passwordStrength = "strong";
    } else if (password.length >= 8) {
        passwordStrength = "medium";
    }

    // Password Strength Color
    var passwordStrengthColor = {
        "weak": "red",
        "medium": "orange",
        "strong": "green"
    };

    passwordStrengthElement.style.width = "100%";

    // Set the password strength color and width based on the strength
    passwordStrengthElement.style.backgroundColor = passwordStrengthColor[passwordStrength];
    // passwordStrengthElement.style.width = widthPercentage + "%";
}

document.getElementById("inputPassword").addEventListener("input", function () {
    var password = this.value;
    var passwordStrengthElement = document.getElementById("passwordStrength");

    // Update and display the password strength as you type
    updatePasswordStrength(passwordStrengthElement, password);
});

function validateForm() {
    var email = document.getElementById("inputEmail").value;
    var phone = document.getElementById("inputPhone").value;
    var password = document.getElementById("inputPassword").value;
    var passwordStrengthElement = document.getElementById("passwordStrength");

    // Email Validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email address");
        return false;
    }

    // Phone Number Validation
    var phonePattern = /^\d{10}$|^(\d{3}[-.\s]){2}\d{4}$/;
    if (!phone.match(phonePattern)) {
        alert("Invalid phone number");
        return false;
    }

    // Password Validation
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordPattern)) {
        alert("Invalid password. It should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number.");
        passwordStrengthElement.style.backgroundColor = "red";
        return false;
    }

    // Update and display the password strength
    updatePasswordStrength(passwordStrengthElement, password);

    return true;
}
