var hamburg = document.getElementById("mobile-menu")

hamburg.addEventListener("change", function() {
    if(this.checked) {
        document.body.style.overflow = "hidden"
    }
})