//assigns const to a description set of words
const hamburger = document.querySelector(".menu_icon");
const sidenavContainer = document.querySelector(".sidenav_container")

//sets the .menu_icon to toggle and work with the X button
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidenavContainer.classList.toggle("active");
})

//allows the .sidenavContainer to disappear when a link is clicked
document.querySelectorAll(".sidenav_container a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidenavContainer.classList.remove("active");
}))