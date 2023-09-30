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
        <?php include('./components/header/nagivation/navigation.php'); ?>
    </nav>

    <main class="main__container">
    <section class="lastarticles__container">
        <div class="article__container">
            <div class="image__article">
                <!-- <img src="./assets/medias/img/top10-rares.webp" alt="top 10 des jeux les plus rares"> -->
            </div>
            <div class="title__article">
                <p>
                    TOP 10 des jeux les plus rares
                </p>
            </div>
        </div>

        <div class="article__container">
            <div class="image__article">
                <!-- <img src="./assets/medias/img/top10-expensives.webp" alt="top 10 des jeux les plus chers"> -->
            </div>
            <div class="title__article">
                <p>
                    TOP 10 des jeux les plus chers
                </p>
            </div>
        </div>

        <div class="article__container">
            <div class="image__article">
                <!-- <img src="./assets/medias/img/sell-bilan2022.png" alt="S.E.L.L : Le bilan 2022 du marché du jeux vidéo"> -->
            </div>
            <div class="title__article">
                <p>
                    S.E.L.L : Le bilan 2022 du marché du jeux vidéo
                </p>
            </div>
        </div>
    </section>





        <!-- <?php include('./pages/main/main.php'); ?> -->
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