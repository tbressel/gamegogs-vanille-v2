


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
 




 function displayGenre() {

    
    // get JSON in array
    const usersList = JSON.parse(usersListJson);
    const gamesList = JSON.parse(gamesListJson);
    
    
    
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

        
        // Récupérez l'élément HTML avec l'id "genre_filter"
        const genreFilterElement = document.getElementById('genre_filter');
        
        // Récupérez le template genre_filter_template
        const genreFilterTemplate = document.getElementById('genre_filter_template');
        
        // Parcourez chaque genre dans le tableau genreCount
        for (const genre in genreCount) {
            // Clonez le contenu du modèle
            const genreFilterItem = document.importNode(genreFilterTemplate.content, true);
            
            // Mettez à jour l'élément de nom du genre avec le nom du genre
            genreFilterItem.querySelector('.name_filter p').textContent = genre;
            
            // Mettez à jour l'élément de quantité avec le nombre total de jeux pour ce genre
            genreFilterItem.querySelector('.quantity_filter p').textContent =  genreCount[genre] + ' / ' + (totalGamesByGenre[genre] || 0);
            
            // Ajoutez l'élément cloné à l'élément genre_filter dans le document
            genreFilterElement.appendChild(genreFilterItem);
        }
     
    }
function displaySupport() {


    
    // get JSON in array
    const usersList = JSON.parse(usersListJson);
    const gamesList = JSON.parse(gamesListJson);
    
    
    
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

        
        // Récupérez l'élément HTML avec l'id "support_filter"
        const supportFilterElement = document.getElementById('support_filter');
        
        // Récupérez le template support_filter_template
        const supportFilterTemplate = document.getElementById('support_filter_template');
        
        // Parcourez chaque support dans le tableau supportCount
        for (const support in supportCount) {
            // Clonez le contenu du modèle
            const supportFilterItem = document.importNode(supportFilterTemplate.content, true);
            
            // Mettez à jour l'élément de nom du support avec le nom du support
            supportFilterItem.querySelector('.name_filter p').textContent = support;
            
            // Mettez à jour l'élément de quantité avec le nombre total de jeux pour ce support
            supportFilterItem.querySelector('.quantity_filter p').textContent =  supportCount[support] + ' / ' + (totalGamesBySupport[support] || 0);
            
            // Ajoutez l'élément cloné à l'élément support_filter dans le document
            supportFilterElement.appendChild(supportFilterItem);
        }
     
    }
    function displayPlateform() {
    
        // Identifiez l'utilisateur spécifique
        const userId = 1;
        const userArray = usersList.find((user) => user.id_user === userId);
    
        // Obtenez les ID des jeux de cet utilisateur
        const userGameIds = userArray.games_user;
    
        // Créez un objet pour stocker les totaux des plateformes et les totaux de jeux par plateforme
        const plateformCount = {};
        const totalGamesByPlateform = {};
    
        // Loop sur les jeux de l'utilisateur
        userGameIds.forEach((gameId) => {
            // Trouvez le jeu dans la liste de jeux en utilisant l'ID du jeu
            const game = gamesList.find((game) => game.id_videogame === gameId);
            if (game) {
                const plateform = game.plateform_videogame;
                // Mettez à jour le compteur de plateforme de l'utilisateur
                if (plateform in plateformCount) {
                    plateformCount[plateform]++;
                } else {
                    plateformCount[plateform] = 1;
                }
            }
        });
    
        // Loop sur la liste complète des jeux pour obtenir le nombre total de jeux par plateforme
        gamesList.forEach((game) => {
            const plateform = game.plateform_videogame;
            if (plateform in totalGamesByPlateform) {
                totalGamesByPlateform[plateform]++;
            } else {
                totalGamesByPlateform[plateform] = 1;
            }
        });
    
        // Récupérez l'élément HTML avec l'id "plateform_filter"
        const plateformFilterElement = document.getElementById('plateform_filter');
    
        // Récupérez le template plateform_filter_template
        const plateformFilterTemplate = document.getElementById('plateform_filter_template');
    
        // Parcourez chaque plateforme dans le tableau plateformCount
        for (const plateform in plateformCount) {
            // Clonez le contenu du modèle
            const plateformFilterItem = document.importNode(plateformFilterTemplate.content, true);
    
            // Mettez à jour l'élément de nom du plateform avec le nom du plateform
            plateformFilterItem.querySelector('.name_filter p').textContent = plateform;
    
            // Mettez à jour l'élément de quantité avec le nombre total de jeux pour cette plateforme
            plateformFilterItem.querySelector('.quantity_filter p').textContent =
                plateformCount[plateform] + ' / ' + (totalGamesByPlateform[plateform] || 0);
    
            // Ajoutez l'élément cloné à l'élément plateform_filter dans le document
            plateformFilterElement.appendChild(plateformFilterItem);
        }
    }
    