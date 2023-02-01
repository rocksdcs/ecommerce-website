const hamburger = document.querySelector(".hamburger");
const sidenavContainer = document.querySelector(".mobile_nav");
const cartIcon = document.querySelector(".cart_icon");
const cartPage = document.querySelector(".cart_page");

cartIcon.addEventListener("click", () => {
    cartIcon.classList.toggle("active");
    cartPage.classList.toggle("active");
})

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidenavContainer.classList.toggle("active");
})

document.querySelectorAll(".mobile_nav a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidenavContainer.classList.remove("active");
}))
