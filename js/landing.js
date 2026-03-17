function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.add("flex");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    popup.classList.remove("flex");
}

function openProject(project) {
    if (project === "gameforge") {
        window.location.href = "index.html"; // change if needed
    }
}