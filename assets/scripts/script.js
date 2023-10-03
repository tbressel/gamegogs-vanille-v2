
// Path to json file 
const gamesListPath = './bdd/games-list.JSON';
const usersListPath = './bdd/users-list.JSON';

// Fetching datas
fetchAndDisplayData();

// Listen to burger button
document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

// listen to profil bar button
document.getElementById('profilarrow-btn-mobile').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

// listen to 
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

