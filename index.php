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
            <?php include('./pages/home/home.php'); ?>
            <section class="newsletter__container black-bg">
   <div class="newsletter__text ">
      <p>
         Inscrivez-vous aux newsletter GameGogs - Restez à la page avec des nouvelles références, articles et plus
         encore !
      </p>
   </div>
   <form class="newsletter__subcontainer" method="get" action="#">
      <label htmlFor="emailField">E-mail* :
         <input id="emailField" name="email" type="email" placeholder='Votre adresse mail' required />
      </label>
      <button class="btn btn__color-green" type='submit' formAction="#">S'abonner</button>
   </form>
</section>







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