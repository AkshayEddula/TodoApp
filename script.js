nav_link = document.getElementsByClassName('nav-img');
nav_bar = document.getElementById('show');
nav_cross = document.getElementsByClassName('nav-cross');

nav_link[0].addEventListener('click',showNavBar);
nav_cross[0].addEventListener('click',closeNavbar);

function showNavBar() {
    nav_bar.style.display = 'block';
}

function closeNavbar() {
    nav_bar.style.display = 'none';
}

