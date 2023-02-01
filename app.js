//assigns const to a description set of words
const hamburger = document.querySelector(".hamburger");
const sidenavContainer = document.querySelector(".mobile_nav")

//sets the .menu_icon to toggle and work with the X button
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidenavContainer.classList.toggle("active");
})

//allows the .sidenavContainer to disappear when a link is clicked
document.querySelectorAll(".mobile_nav a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidenavContainer.classList.remove("active");
}))