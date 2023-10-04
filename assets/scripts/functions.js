// Loading JSON's datas and send them to the local storage
async function fetchAndStoreJson(path, storeId) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        const jsonString = JSON.stringify(data);
        localStorage.setItem(storeId, jsonString);
        console.log(storeId);
        return data;
    } catch (error) {
        console.error('Erreur', error);
    }
}
// Get JSON in local storage and display them
async function fetchAndDisplayData() {
    try {
        const gamesData = await fetchAndStoreJson(gamesListPath, 'gamesData');
        const usersData = await fetchAndStoreJson(usersListPath, 'usersData');
        
        // if all is OK
        console.log(JSON.parse(localStorage.getItem('gamesData')));
        console.log(JSON.parse(localStorage.getItem('usersData')));
        
        displayLastGames();
    } catch (error) {
        console.error('Il y\'a une erreur', error);
    }
}

function displayLastGames() {

    // parse into JSON format
    gamesData = JSON.parse(localStorage.getItem('gamesData'))

    // Sorting games from the most recent first
    gamesData.sort((a, b) => new Date(b.addeddate_videogame) - new Date(a.addeddate_videogame));

    // select 6 games from index 0
    recentGames = gamesData.slice(0, 6);

    console.log(recentGames)

    // get template element
    const listItemsTemplate = document.getElementById('list-items-template');

    // get destination element
    const listItemsElements = document.getElementById('list-items');

    // Lopping on recentGames array and creating clone template node into DOM
    recentGames.forEach(game => {
        // Clone the template
        const templateContent = document.importNode(listItemsTemplate.content, true);

        // building the template
        templateContent.querySelector('.lastgames-items__last-items').setAttribute('id', `${game.id_videogame}`);
        templateContent.querySelector('.lastgames-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.lastgames-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.lastgames-items__subtitle h4').textContent = game.subtitle_videogame;
        templateContent.querySelector('.lastgames-items__plateform img').setAttribute("src", `./assets/${game.plateform_videogame[1]}`);

        templateContent.querySelector('.lastgames-maxitem__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.lastgames-maxitem__subtitle h4').textContent = game.subtitle_videogame;
        templateContent.querySelector('.lastgames-maxitem__plateform p').textContent = game.plateform_videogame[0];
        templateContent.querySelector('.lastgames-maxitem__year p').textContent = game.year_videogame;
        templateContent.querySelector('.lastgames-maxitem__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.lastgames-maxitem__editor p').textContent = game.editor_videogame;
        templateContent.querySelector('.lastgames-maxitem__genre p').textContent = game.genre_videogame;
        templateContent.querySelector('.lastgames-maxitem__country p').textContent = game.country_videogame;
        templateContent.querySelector('.lastgames-maxitem__ref p').textContent = game.ref_videogame;
        templateContent.querySelector('.lastgames-maxitem__support p').textContent = game.support_videogame;

        // send template into DOM
        listItemsElements.appendChild(templateContent);
    });
}

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

// fetching a main page and waiting for the response to send it to the destination node
async function insertPageContent(fileName, path, id) {
    try {
        const response = await fetch(path + fileName);
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

// showing the filter barre 
function setFilterBar(pageName) {
    if(currentPage === pageName) return
    document.getElementById("filter-nav").classList.toggle("show")

}

function findUserGameByUserId(id) {
    // find user in user list
    const usersData = JSON.parse(localStorage.getItem('usersData'));

    // loop the array to find user
    const user = usersData.find(user => user.id_user === id);

    if (user) {
        // filter gamesData to retrive userGames
        const userGames = gamesData.filter(game => user.games_user.includes(game.id_videogame));
        return userGames
    }
}

function displayMyItemsView1(templateId, userGames) {
    // get the template
    const listItemsTemplate = document.getElementById(templateId);

    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

    userGames.forEach(game => {
        // clone the template
        const templateContent = document.importNode(listItemsTemplate.content, true);

        // prepare the template with datas
        templateContent.querySelector('.view1-items__maincontainer').setAttribute('id', `${game.id_videogame}`);
        templateContent.querySelector('.view1-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.view1-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.view1-items__plateform img').setAttribute("src", `./assets/${game.plateform_videogame[1]}`);
        templateContent.querySelector('.view1-maxitem__year p').textContent = game.year_videogame;
        templateContent.querySelector('.view1-maxitem__editor p').textContent = game.editor_videogame;

        // send the template into DOM
        myitemsContainer.appendChild(templateContent);
    });
}

function displayMyItemsView2(templateId, userGames) {
    // get the template
    const listItemsTemplate = document.getElementById(templateId);

    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

    userGames.forEach(game => {
        // clone the template
        const templateContent = document.importNode(listItemsTemplate.content, true);

        // construct elements of the clone template
        templateContent.querySelector('.view2-item__maincontainer').setAttribute('id', `${game.id_videogame}`);
        templateContent.querySelector('.view2-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.view2-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.view2-items__subtitle h4').textContent = game.subtitle_videogame;
        templateContent.querySelector('.view2-items__plateform p').textContent = game.plateform_videogame[0];
        templateContent.querySelector('.view2-items__year p').textContent = game.year_videogame;
        templateContent.querySelector('.view2-items__editor p').textContent = game.editor_videogame;

        // send template into DOM
        myitemsContainer.appendChild(templateContent);
    });
}

function displayMyItemsView3(templateId, userGames) {

    // get the template
    const listItemsTemplate = document.getElementById(templateId);

    // get the destination element 
    const myitemsContainer = document.getElementById('list-items');

    userGames.forEach(game => {
        // Cone the template
        const templateContent = document.importNode(listItemsTemplate.content, true);

        // loading datas into clone
        templateContent.querySelector('.view3-item__maincontainer').setAttribute('id', `${game.id_videogame}`);
        //  templateContent.querySelector('.view3-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.view3-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.view3-items__plateform p').textContent = game.plateform_videogame[0];
        templateContent.querySelector('.view3-items__year p').textContent = game.year_videogame;
        templateContent.querySelector('.view3-items__editor p').textContent = game.editor_videogame;

        // Send data to dOM
        myitemsContainer.appendChild(templateContent);
    });
}

function eraseTextareaContent(target) {
    target.parentElement.firstElementChild.firstElementChild.value = "";
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

function displayGenre() {

    // get JSON in array
    const gamesList = JSON.parse(localStorage.getItem('gamesData'));
    const usersList = JSON.parse(localStorage.getItem('usersData'));

    // get the user
    const userId = 1;
    const userArray = usersList.find(user => user.id_user === userId);

    // get id 's game from this user
    const userGameIds = userArray.games_user;

    // new array with genre and count
    const genreCount = {};
    const totalGamesByGenre = {};

    // loop on user's game
    userGameIds.forEach(gameId => {
        // find in gameList with games ID
        const game = gamesList.find(game => game.id_videogame === gameId);
        if (game) {
            // get it !
            const genre = game.genre_videogame;

            // is already exist ?
            if (genre in genreCount) {
                // if it is
                genreCount[genre]++;
            } else {
                // if not
                genreCount[genre] = 1;
            }
        }
    });

    // Loop on th whole game list
    gamesList.forEach((game) => {
        const genre = game.genre_videogame;
        if (genre in totalGamesByGenre) {
            totalGamesByGenre[genre]++;
        } else {
            totalGamesByGenre[genre] = 1;
        }
    });


    // get html element with id "genre_filter"
    const genreFilterElement = document.getElementById('genre_filter');

    // get the  template genre_filter_template
    const genreFilterTemplate = document.getElementById('genre_filter_template');

    // Ploop the array genreCount
    for (const genre in genreCount) {
        // clone hte template
        const genreFilterItem = document.importNode(genreFilterTemplate.content, true);
        genreFilterItem.querySelector('.name_filter p').textContent = genre;
        genreFilterItem.querySelector('.quantity_filter p').textContent = genreCount[genre] + ' jeux possédé(s) sur ' + (totalGamesByGenre[genre] || 0);
        genreFilterElement.appendChild(genreFilterItem);
    }

}
function displaySupport() {

    // get JSON in array
    const gamesList = JSON.parse(localStorage.getItem('gamesData'));
    const usersList = JSON.parse(localStorage.getItem('usersData'));


    // get the user
    const userId = 1;
    const userArray = usersList.find(user => user.id_user === userId);

    // get id 's game from this user
    const userGameIds = userArray.games_user;

    // new array with support and count
    const supportCount = {};
    const totalGamesBySupport = {};

    // loop on user's game
    userGameIds.forEach(gameId => {
        // find in gameList with games ID
        const game = gamesList.find(game => game.id_videogame === gameId);
        if (game) {
            // get it !
            const support = game.support_videogame;

            // is already exist ?
            if (support in supportCount) {
                // if it is
                supportCount[support]++;
            } else {
                // if not
                supportCount[support] = 1;
            }
        }
    });

    // Loop on th whole game list
    gamesList.forEach((game) => {
        const support = game.support_videogame;
        if (support in totalGamesBySupport) {
            totalGamesBySupport[support]++;
        } else {
            totalGamesBySupport[support] = 1;
        }
    });


    // get the element id "support_filter"
    const supportFilterElement = document.getElementById('support_filter');

    // get the templayte support_filter_template
    const supportFilterTemplate = document.getElementById('support_filter_template');

    // lopp the array supportCount
    for (const support in supportCount) {
        // clone the template
        const supportFilterItem = document.importNode(supportFilterTemplate.content, true);
        supportFilterItem.querySelector('.name_filter p').textContent = support;
        supportFilterItem.querySelector('.quantity_filter p').textContent = supportCount[support] + ' jeux possédé(s) sur ' + (totalGamesBySupport[support] || 0 );
        supportFilterElement.appendChild(supportFilterItem);
    }

}
function displayPlateform() {
    // get JSON in array
    const gamesList = JSON.parse(localStorage.getItem('gamesData'));
    const usersList = JSON.parse(localStorage.getItem('usersData'));


    // get the user by ID
    const userId = 1;
    const userArray = usersList.find((user) => user.id_user === userId);

    // get the games 
    const userGameIds = userArray.games_user;

    // create objet to get plateform counter and total game by plateform
    const plateformCount = {};
    const totalGamesByPlateform = {};

    // Loop with games's user array
    userGameIds.forEach((gameId) => {
        // with the game ID find the game
        const game = gamesList.find((game) => game.id_videogame === gameId);
        if (game) {
            const plateform = game.plateform_videogame[0];
            // update user plateform counter 
            if (plateform in plateformCount) {
                plateformCount[plateform]++;
            } else {
                plateformCount[plateform] = 1;
            }
        }
    });

    // Loop on the whole array af games and get plateforme plateforme
    gamesList.forEach((game) => {
        const plateform = game.plateform_videogame[0];
        if (plateform in totalGamesByPlateform) {
            totalGamesByPlateform[plateform]++;
        } else {
            totalGamesByPlateform[plateform] = 1;
        }
    });

    // het html element with id "plateform_filter"
    const plateformFilterElement = document.getElementById('plateform_filter');

    // get the template plateform_filter_template
    const plateformFilterTemplate = document.getElementById('plateform_filter_template');

    // loop on each plateforme plateformCount
    for (const plateform in plateformCount) {
        // clone the template
        const plateformFilterItem = document.importNode(plateformFilterTemplate.content, true);
        plateformFilterItem.querySelector('.name_filter p').textContent = plateform;
        plateformFilterItem.querySelector('.quantity_filter p').textContent =
            plateformCount[plateform] + ' jeux possédé(s) sur ' + (totalGamesByPlateform[plateform] || 0);
        plateformFilterElement.appendChild(plateformFilterItem);
    }
}



