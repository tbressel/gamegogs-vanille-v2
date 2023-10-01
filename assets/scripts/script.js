// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ------ Awaiting for PHP SQL informations I use a JSON file ----
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
function fetchJson(path,storeId) {
    // fetch the file path to send it to the local storage
    fetch(path)
      .then(response => response.json())
      .then(data => {
        // format json's data for local storage
        const jsonString = JSON.stringify(data);
    
        // set it !
        localStorage.setItem(storeId, jsonString);
      })
      .catch(error => {
        console.error('Erreur :', error);
      });
}

// path to my JSON datas
const gamesListPath = './bdd/games-list.JSON';
const usersListPath = './bdd/users-list.JSON';

fetchJson(gamesListPath,'gamesData');
fetchJson(usersListPath,'usersData');





// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------- functions declaration ------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
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

function displayFooterMenu(event) {
    document.getElementById(event.target.getAttribute("data-set")).classList.toggle('active');
}


function reverseFooterArrow(event) {
    event.target.classList.toggle('down');
}


// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ------ Listener on the burger button and active class state ---
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

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



// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------- About Last games added ------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

// get games list from localStorage
const jsonString = localStorage.getItem('gamesData');

// parse into JSON format
const jsonData = JSON.parse(jsonString);

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
       console.log('ok çà filtre')
       document.getElementById('overlay-filter').classList.toggle('show');
    }
})





// fetching a main page and waiting for the response to send it to the destination node
async function insertPageContent(fileName,path,id) {
    try {
        const response = await fetch(path+fileName);
        if (!response.ok) {
            throw new Error(`Erreur de chargement de ${fileName}`);
        }
        const content = await response.text();
        // send of content to destination node
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(error.message);
    }
}

// to delete a child node content by its ID
function deleteContainer(id) {
    document.getElementById(id).textContent = "";
}

// showing the filter barre if true
function setFilterBar(bool) {
    if (bool) {
        document.getElementById("filter-nav").style.top = "108px";
    } else {
        document.getElementById("filter-nav").style.top = "0px";    
    }
}


function findUserGameByUserId(id) {
    // get informations from local storage
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    const gamesData = JSON.parse(localStorage.getItem('gamesData'));

    // find user in user list
    const user = usersData.find(user => user.id_user === id);

    if (user) {
        // filter gamesData to retrive userGames
        const userGames = gamesData.filter(game => user.games_user.includes(game.id_videogame));
        return userGames
    }
}


function displayMyItemsView1(templateId,userGames) {
    // get the template
    const listItemsTemplate = document.getElementById(templateId);
        
    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

    userGames.forEach(game => {
        // Clonez le contenu du modèle
        const templateContent = document.importNode(listItemsTemplate.content, true);

        // Mettre à jour les éléments HTML du modèle avec les données du jeu
        templateContent.querySelector('.view1-items__maincontainer').setAttribute('id', `${game.id_videogame}`);
        templateContent.querySelector('.view1-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.view1-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.view1-items__plateform p').textContent = game.plateform_videogame;
        templateContent.querySelector('.view1-maxitem__year p').textContent = game.year_videogame;
        templateContent.querySelector('.view1-maxitem__editor p').textContent = game.editor_videogame;

        // Ajouter le contenu au conteneur
        myitemsContainer.appendChild(templateContent);
    });
}



function displayMyItemsView2(templateId,userGames) {
    // get the template
    const listItemsTemplate = document.getElementById(templateId);
        
    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

 userGames.forEach(game => {
     // Clonez le contenu du modèle
     const templateContent = document.importNode(listItemsTemplate.content, true);

     // Mettre à jour les éléments HTML du modèle avec les données du jeu
     templateContent.querySelector('.collection-item__maincontainer').setAttribute('id', `${game.id_videogame}`);
     templateContent.querySelector('.collection-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
     templateContent.querySelector('.collection-items__title h3').textContent = game.title_videogame;
     templateContent.querySelector('.collection-items__plateform p').textContent = game.plateform_videogame;
     // templateContent.querySelector('.collection-maxitem__year p').textContent = game.year_videogame;
     // templateContent.querySelector('.collection-maxitem__editor p').textContent = game.editor_videogame;

     // Ajouter le contenu au conteneur
     myitemsContainer.appendChild(templateContent);
 });
}
function displayMyItemsView3(templateId,userGames) {
    // get the template
    const listItemsTemplate = document.getElementById(templateId);
        
    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

 userGames.forEach(game => {
     // Clonez le contenu du modèle
     const templateContent = document.importNode(listItemsTemplate.content, true);

     // Mettre à jour les éléments HTML du modèle avec les données du jeu
     templateContent.querySelector('.collection-item__maincontainer').setAttribute('id', `${game.id_videogame}`);
    //  templateContent.querySelector('.collection-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
     templateContent.querySelector('.collection-items__title h3').textContent = game.title_videogame;
     templateContent.querySelector('.collection-items__plateform p').textContent = game.plateform_videogame;
     // templateContent.querySelector('.collection-maxitem__year p').textContent = game.year_videogame;
     // templateContent.querySelector('.collection-maxitem__editor p').textContent = game.editor_videogame;

     // Ajouter le contenu au conteneur
     myitemsContainer.appendChild(templateContent);
 });
}





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


function eraseTextareaContent(target) {
   target.parentElement.firstElementChild.firstElementChild.value="";
   console.log('contenu de <textarea> est effacé')
}


function closeNotesContainer(element) {
   // Close the notes container if main section of the item is closed
   if (element.nextElementSibling.classList.contains('hidden')) {
      return;
   } else {
      element.nextElementSibling.classList.add('hidden');
   }
}
