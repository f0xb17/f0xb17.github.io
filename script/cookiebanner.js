/**
 * This is the entire logic for the cookie banner. 
 * Can be extended if necessary, but since I have a no-track policy, 
 * nothing more is done here than telling the user exactly that and then hiding again. 
 */

document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.querySelector(".cookie-banner")
    const cookieBtn = document.querySelector(".cookie-btn")

    cookieBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none'
        localStorage.setItem('cookieBannerDisplayed', true)
    })

    window.addEventListener('load', () => {
        if(!localStorage.getItem('cookieBannerDisplayed')) {
            cookieBanner.style.display = 'flex'
            cookieBanner.style.display = '-webkit-flex'
        }
    })
})