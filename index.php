<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameGogs - La chasse aux trésors</title>
    <meta name="description" content="Base de données pour les collectionneurs de jeux vidéos rétro et nextgen. Gestion de contenu détaillé et marketplace ou bien simple gestionnaire de collection">
    <link rel="stylesheet" href="./assets/style/css/index.css">
</head>

<body>
    <header class="black-bg">
        <?php include('./components/header/header.php'); ?>
    </header>
    <nav class="submenu__container">
        <?php include('./components/header//nagivation/navigation.php'); ?>
    </nav>

    <main></main>
    <style>
        main {
            height: 500px;
        }
    </style>


    <footer class="black-bg">
        <div class="footer__container">

            <div class="socialnetworks__container">
                <div class="socialnetwork__block">
                    <div class="socialnetwork__title">
                        <p>Suivez-nous</p>
                    </div>
                    <ul id="follow__ul" class="socialnetworkmenu__follow">
                        <li class="socialnetworkmenu__li">
                            <img src="./assets/svg/facebook-logo.svg" alt="facebook">
                            <p>Aide & Support</p>
                        </li>
                        <li class="socialnetworkmenu__li">
                            <p>Laisser une évaluation</p>
                        </li>
                        <li class="socialnetworkmenu__li">
                            <p>Raccourcis clavier</p>
                        </li>
                        <li class="socialnetworkmenu__li">
                            <p>Guide d\'utilisation de la base de données</p>
                        </li>
                    </ul>
                </div>
            </div>





            <?php include('./components/footer/about/about.php'); ?>
        </div>
    </footer>
    <script src="./assets/scripts/script.js"></script>
</body>

</html>