//! Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//? ketika hammburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

//? Klik di luar sidebar untuk menghiilangkan nav
const hammburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
    if (!hammburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
