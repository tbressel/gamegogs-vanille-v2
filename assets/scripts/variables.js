// path to my JSON datas
const gamesListPath = './bdd/games-list.JSON';
const usersListPath = './bdd/users-list.JSON';
// const usersListPath = './bdd/users-list.JSON';
// const cpcpowerListPath = './bdd/cpclower.json';

// Récupérez les données d'utilisateurs et de jeux depuis le stockage local
const usersListJson = localStorage.getItem('usersData');
const gamesListJson = localStorage.getItem('gamesData');




    // get informations from local storage
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    const gamesData = JSON.parse(localStorage.getItem('gamesData'));


            // Parsez les données JSON en tableaux
            const usersList = JSON.parse(usersListJson);
            const gamesList = JSON.parse(gamesListJson);