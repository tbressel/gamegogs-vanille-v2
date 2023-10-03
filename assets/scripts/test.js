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
        templateContent.querySelector('.collection-item__maincontainer').setAttribute('id', `${game.id_videogame}`);
        templateContent.querySelector('.collection-items__coverimage img').setAttribute("src", `./assets/${game.coverpic_videogame}`);
        templateContent.querySelector('.collection-items__title h3').textContent = game.title_videogame;
        templateContent.querySelector('.collection-items__subtitle h4').textContent = game.subtitle_videogame;
        templateContent.querySelector('.collection-items__plateform p').textContent = game.plateform_videogame[0];
        templateContent.querySelector('.collection-items__year p').textContent = game.year_videogame;
        templateContent.querySelector('.collection-items__editor p').textContent = game.editor_videogame;

        // send template into DOM
        myitemsContainer.appendChild(templateContent);
    });
}