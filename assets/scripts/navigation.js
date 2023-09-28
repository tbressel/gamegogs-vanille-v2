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
}

function closeSubMenu() {
    document.querySelector(`.navigation__container .menu__ul--profil`).classList.toggle('active');
    SubMenuState = !SubMenuState; 
}





// ---------------------------------------------------------------
// ------ Listener on the burger button and active class state ---
// ---------------------------------------------------------------
document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleBurgerMenu(event);
    // test if sub menu is active, if it is, we close it
    if (SubMenuState) {
        closeSubMenu()
    }

})
document.getElementById('profilarrow-btn').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

