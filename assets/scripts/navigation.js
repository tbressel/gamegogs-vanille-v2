// ---------------------------------------------------------------
// -------------------- global declaration -----------------------
// ---------------------------------------------------------------
let BurgerMenuState = false;
let SubMenuState = false;



// ---------------------------------------------------------------
// ---------------------- functions declaration ------------------
// ---------------------------------------------------------------
function toggleBurgerMenu(event) {
    document.querySelector(`.navigation__container .${event.target.getAttribute('data-set')}`).classList.toggle('active');
    BurgerMenuState = !BurgerMenuState;
}

function toggleSubMenu(event) {
    document.querySelector(`.navigation__container .${event.target.getAttribute('data-set')}`).classList.toggle('active');
    SubMenuState = !SubMenuState;
    reverseProfilArrow();
}

function closeSubMenu() {
    document.querySelector(`.navigation__container .menu__ul--profil`).classList.toggle('active');
    SubMenuState = !SubMenuState; 
}

function reverseProfilArrow() {
    document.getElementById('arrow-mobile').classList.toggle('down');
}



// ---------------------------------------------------------------
// ------ Listener on the burger button and active class state ---
// ---------------------------------------------------------------
document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleBurgerMenu(event);
    // test if sub menu is active, if it is, we close it
    if (SubMenuState) {
        closeSubMenu();
        reverseProfilArrow();
    }

})
document.getElementById('profilarrow-btn-mobile').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

