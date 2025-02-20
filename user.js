
function selectProfile(user) {
    console.log("Selected profile:", user); 
    localStorage.setItem("selectedUser", user); 

    window.location.href = "index.html"; 
}
document.addEventListener("DOMContentLoaded", function () {
    const selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
        console.log("Welcome back, " + selectedUser + "!");
    }
});
