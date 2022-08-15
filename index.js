/* ------------------------ MENU ------------------------ */
const toggle = document.querySelector (".toggle")
const navmenu = document.querySelector (".nav-menu")

toggle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible");
});