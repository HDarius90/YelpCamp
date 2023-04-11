const password = prompt("Please enter a new password");

// Password must be 6+ characters
// Password cannot include space

if (password.length <= 6) {
    console.log("Password is too short");
} else if (password.indexOf(" ") != -1) {
    console.log("Password includes forbiden character");
} else {
    console.log("Password saved");
}













