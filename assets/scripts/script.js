const gamesListPath = './bdd/games-list.JSON';
const usersListPath = './bdd/users-list.JSON';
let gamesData = [];
let usersData = [];
let recentGames = [];



// Get JSON in local storage and display them
fetchAndStoreJson(gamesListPath, 'gamesData')
    .then(gamesData => {
        // get users datas
        return fetchAndStoreJson(usersListPath, 'usersData')
            .then(usersData => {
                // if all is OK
                console.log('Données des jeux :', JSON.parse(localStorage.getItem('gamesData')));
                console.log('Données des utilisateurs :', JSON.parse(localStorage.getItem('usersData')));

                displayLastGames()
            });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite :', error);
    });




// // Obtenez les données d'utilisateurs et de jeux depuis le stockage local
// 
// const gamesData = JSON.parse(localStorage.getItem('gamesData'));

// // Obtenez les données JSON d'utilisateurs et de jeux depuis le stockage local
// const usersListJson = localStorage.getItem('usersData');
// const gamesListJson = localStorage.getItem('gamesData');

// // Parsez les données JSON en tableaux
// const usersList = JSON.parse(usersListJson);
// const gamesList = JSON.parse(gamesListJson);




document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

document.getElementById('profilarrow-btn-mobile').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

document.getElementById('footer-menu').addEventListener('click', (event) => {
    if (event.target.getAttribute("alt") !== "arrow") return
    displayFooterMenu(event);
    reverseFooterArrow(event);
})


document.getElementById('collection').addEventListener('click', async () => {
    // close submenu
    closeSubMenu();

    // delete main container
    deleteContainer('main');

    // eneble filter bar
    setFilterBar(true);

    // awaiting for the page content
    await insertPageContent("collection.php", "pages/collection/", "main");

    // display items with the view 1
    displayMyItemsView1('list-items-template', findUserGameByUserId(1));

    displayGenre();

    displaySupport();

    displayPlateform();
})

document.getElementById('filter-nav').addEventListener('click', (event) => {
    if (event.target.getAttribute('alt') === "view1") {

        // delete main container
        deleteContainer('list-items');

        // display items with the view 1
        displayMyItemsView1('list-items-template', findUserGameByUserId(1));

    } else if (event.target.getAttribute('alt') === "view2") {

        // delete main container
        deleteContainer('list-items');

        // display items with the view 2
        displayMyItemsView2('list-items-template2', findUserGameByUserId(1));

    } else if (event.target.getAttribute('alt') === "view3") {

        // delete main container
        deleteContainer('list-items');

        // display items with the view 3
        displayMyItemsView3('list-items-template3', findUserGameByUserId(1));

    } else if (event.target.getAttribute('data-btn-filter') === "") {
        document.getElementById('overlay-filter').classList.toggle('show');
    }
})




let globalbotInfoContainer = null;
let globalNotesInfoContainer = null;

// Listen if any arrow-img is clicked
document.getElementById("main").addEventListener('click', (event) => {
    console.log(event.target);


    if (event.target.getAttribute("id") === "arrow-img") {

        // switch class to change arrow direction
        event.target.classList.toggle("arrow_change");

        // And sibling top-information and then bot-informations to toggle hidden class
        let botInfoContainer = event.target.closest(".top-informations").nextElementSibling;
        console.log('Element ciblé : ', botInfoContainer);
        botInfoContainer.classList.toggle('hidden');
        globalbotInfoContainer = botInfoContainer;
        closeNotesContainer(botInfoContainer)
    }
    // Lisen if inside this event the element edit-note is clicked
    if (event.target.getAttribute("id") === "edit-notes") {

        // The sibling parent element 
        let notesInfoContainer = event.target.closest('.bot-informations').nextElementSibling;
        console.log('Element ciblé : ', notesInfoContainer);
        notesInfoContainer.classList.toggle('hidden');
    };

    if (event.target.getAttribute('id') === 'textarea-erase') {
        event.preventDefault();
        eraseTextareaContent(event.target);
        closeNotesContainer(globalbotInfoContainer);
    }
})

