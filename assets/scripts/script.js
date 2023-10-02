

fetchJson(gamesListPath,'gamesData');
fetchJson(usersListPath,'usersData');





document.getElementById('burger-btn').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

document.getElementById('profilarrow-btn-mobile').addEventListener('click', (event) => {
    toggleSubMenu(event);
})

document.getElementById('footer-menu').addEventListener('click', (event) => {
    if(event.target.getAttribute("alt") !== "arrow") return
   displayFooterMenu(event);
   reverseFooterArrow(event);
})



// parse into JSON format
const jsonData = JSON.parse(gamesListJson);

// Sorting games from the most recent first
jsonData.sort((a, b) => new Date(b.addeddate_videogame) - new Date(a.addeddate_videogame));

// select 6 games from index 0
const recentGames = jsonData.slice(0, 6);



// get template element
const listItemsTemplate = document.getElementById('list-items-template');

// get destination element
const listItemsElements = document.getElementById('list-items');

// Lopping on recentGames array and creating clone template node into DOM
recentGames.forEach(game => {
    // Clonez le modèle
    const templateContent = document.importNode(listItemsTemplate.content, true);

    // Mettez à jour les éléments HTML du modèle avec les données du jeu
    templateContent.querySelector('.lastgames-items__last-items').setAttribute('id',`${game.id_videogame}`);
    templateContent.querySelector('.lastgames-items__coverimage img').setAttribute("src",`./assets/${game.coverpic_videogame}`);
    templateContent.querySelector('.lastgames-items__title h3').textContent = game.title_videogame;
    templateContent.querySelector('.lastgames-items__subtitle h4').textContent = game.subtitle_videogame;
    templateContent.querySelector('.lastgames-items__plateform p').textContent = game.plateform_videogame;

    templateContent.querySelector('.lastgames-maxitem__title h3').textContent = game.title_videogame;
    templateContent.querySelector('.lastgames-maxitem__subtitle h4').textContent = game.subtitle_videogame;
    templateContent.querySelector('.lastgames-maxitem__plateform p').textContent = game.plateform_videogame;
    templateContent.querySelector('.lastgames-maxitem__year p').textContent = game.year_videogame;
    templateContent.querySelector('.lastgames-maxitem__coverimage img').setAttribute("src",`./assets/${game.coverpic_videogame}`);
    templateContent.querySelector('.lastgames-maxitem__editor p').textContent = game.editor_videogame;
    templateContent.querySelector('.lastgames-maxitem__genre p').textContent = game.genre_videogame;
    templateContent.querySelector('.lastgames-maxitem__country p').textContent = game.country_videogame;
    templateContent.querySelector('.lastgames-maxitem__ref p').textContent = game.ref_videogame;
    templateContent.querySelector('.lastgames-maxitem__support p').textContent = game.support_videogame;

    // Ajoutez le contenu cloné et personnalisé à la section
    listItemsElements.appendChild(templateContent);
});


// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ----------------------- About my collection -------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
document.getElementById('collection').addEventListener('click', async() => {
    // close submenu
    closeSubMenu();
    
    // delete main container
    deleteContainer('main');
    
    // eneble filter bar
    setFilterBar(true);
 
    // awaiting for the page content
    await insertPageContent("collection.php","pages/collection/","main");
    
    // display items with the view 1
    displayMyItemsView1('list-items-template',findUserGameByUserId(1));

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










// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ----------- About click on the arrow in my collection----------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------


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
      console.log('Element ciblé : ',botInfoContainer);
      botInfoContainer.classList.toggle('hidden');
      globalbotInfoContainer = botInfoContainer;
      closeNotesContainer(botInfoContainer)
   }
   // Lisen if inside this event the element edit-note is clicked
      if (event.target.getAttribute("id") === "edit-notes") {
      
      // The sibling parent element 
      let notesInfoContainer = event.target.closest('.bot-informations').nextElementSibling;
      console.log('Element ciblé : ',notesInfoContainer);
      notesInfoContainer.classList.toggle('hidden');
   };

      if (event.target.getAttribute('id') === 'textarea-erase') {
         event.preventDefault();
        eraseTextareaContent(event.target);
        closeNotesContainer(globalbotInfoContainer);
      }
})






// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ----------- Filter----------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

