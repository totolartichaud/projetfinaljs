let navbarMenu = document.getElementById('navbarDrowndownMenu');
let navDropper = document.getElementById('dropper');
let menuOpen = false;

navDropper.addEventListener('click', function() {

    if(menuOpen) {

        menuOpen = false;
        navbarMenu.style.display = "none";

    } else {
        
        menuOpen = true;
        navbarMenu.style.display = "inline-block";

    }

});
