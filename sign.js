document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signin-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        if (email === "test@example.com" && password === "password123") {
            window.location.href = "user.html"; 
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
