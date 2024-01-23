
/**
 * This method serves as a temporary fix for mobile browsers to prevent any overflow.
 */

const mobileMenu = document.querySelector('#mobile-menu')

mobileMenu.addEventListener('change', function() {
    if(this.checked) {
        document.body.style.overflow = 'hidden'
    }
})