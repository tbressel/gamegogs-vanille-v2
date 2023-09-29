<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameGogs - La chasse aux trésors</title>
    <meta name="description" content="Base de données pour les collectionneurs de jeux vidéos rétro et nextgen. Gestion de contenu détaillé et marketplace ou bien simple gestionnaire de collection">

    <link rel="icon" href="./favicon.ico">
    <link rel="stylesheet" href="./assets/style/css/index.css">
</head>

<body>
    <header class="black-bg">
        <?php include('./components/header/header.php'); ?>
    </header>


    <nav class="submenu__container">
        <?php include('./components/header//nagivation/navigation.php'); ?>
    </nav>

    <main>
        <!-- <?php include('./pages/main/main.php'); ?> -->
        <!-- <?php include('./pages/collection/collection.php'); ?> -->

        <div class="collection__main-container">

            <nav class="filter__navigation black-bg">
                <div class="filter__container">
                    <div class="filter__button">
                        <img src="./assets/svg/plus-btn.svg" alt="plus button"><span>Filtre</span>
                    </div>
                </div>
                <div class="views__buttons">

                    <div class="view1">
                        <img src="./assets/svg/view1.svg" alt="view1">
                    </div>
                    <div class="view2">
                        <img src="./assets/svg/view2.svg" alt="view2">
                    </div>
                    <div class="view3">
                        <img src="./assets/svg/view3.svg" alt="view3">
                    </div>

                </div>
            </nav>


            <h1>TITRE DE LA PAGE</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi qui explicabo at quo laboriosam ea asperiores rerum magni molestias. Ducimus earum provident rerum aliquam? Eius ducimus deleniti veniam ut.
            </p>
        </div>





    </main>

    <footer class="black-bg">
        <div class="footer__container">
            <?php include('./components/footer/social-networks/social-networks.php'); ?>
            <?php include('./components/footer/about/about.php'); ?>
            <?php include('./components/footer/logo/logo.php'); ?>
            <?php include('./components/footer/rgpd/rgpd.php'); ?>
        </div>
    </footer>
    <script src="./assets/scripts/script.js"></script>
</body>

</html>