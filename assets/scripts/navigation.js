
// ---------------------------------------------------------------
// ---------------------- functions declaration ------------------
// ---------------------------------------------------------------

function toggleSubMenu(event) {
    document.querySelector(`.submenu__container .${event.target.getAttribute('data-set')}`).classList.toggle('active');
    reverseProfilArrow();
}

function closeSubMenu() {
    document.querySelector(`.submenu__container .menu__ul--profil`).classList.toggle('active');
}

function reverseProfilArrow() {
    document.getElementById('arrow-mobile').classList.toggle('down');
}



// ---------------------------------------------------------------
// ------ Listener on the burger button and active class state ---
// ---------------------------------------------------------------

document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

document.getElementById('profilarrow-btn-mobile').addEventListener('click', (event) => {
    toggleSubMenu(event);
})
