const hamburger = document.querySelector(".menu_icon");
const sidenavContainer = document.querySelector(".sidenav_container")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidenavContainer.classList.toggle("active");
})

document.querySelectorAll(".sidenav_container a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidenavContainer.classList.remove("active");
}))