   <?php
   try {
      $connexion = new PDO('mysql:host=localhost;dbname=BD_GAMEGOGS', 'zisquier', 'pass');
      //$connexion = new PDO('mysql:host=localhost;dbname=c1509222c_BD_GAMEGOGS', 'c1509222c_zisquier', 'creativeformation');
   } catch (PDOException $getError) {
      echo 'erreur :' . $getError->getMessage();
   }
   ?>