function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    
    // Validate username
    if (username.trim() === "" || username.length < 5 || username.length > 20) {
        usernameError.textContent = "Username must be between 5 and 20 characters";
        return false;
    } else {
        usernameError.textContent = "";
    }
    
    // Validate email
    if (!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")) {
        emailError.textContent = "Invalid email address";
        return false;
    } else {
        emailError.textContent = "";
    }
    
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
        return false;
    } else {
        passwordError.textContent = "";
    }
    
    
    // Form is valid, proceed with submission
    return true;
}