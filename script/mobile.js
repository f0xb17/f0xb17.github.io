const mobileMenu = document.querySelector("#mobile-menu")
const cookieBanner = document.querySelector(".cookie-banner")
const cookieBtn = document.querySelector("#cookie-btn")

mobileMenu.addEventListener("change", function() {
    if(this.checked) {
        document.body.style.overflow = "hidden"
        cookieBanner.style.display = "none"
    }
})

cookieBtn.addEventListener("click", function() {
    cookieBanner.style.display = "none"
})

window.addEventListener("load", function() {
    if(!localStorage.getItem("cookieBannerDisplayed")) {
        cookieBanner.style.display = "block"
        localStorage.setItem("cookieBannerDisplayed", true)
    }
})