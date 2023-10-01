<?php
try {
    $connexion = new PDO('mysql:host=localhost;dbname=BD_GAMEGOGS', 'zisquier', 'pass');
} catch (PDOException $getError) {
    echo 'Erreur : ' . $getError->getMessage();
    die(); // Arrêter le script en cas d'erreur de connexion à la base de données.
}

// Exemple de requête SQL pour extraire toutes les données de la table 'votre_table'.
$query = $connexion->prepare('SELECT * FROM video_games');
$query->execute();
$dataToStore = $query->fetchAll(PDO::FETCH_ASSOC);
?>

<script>
var dataToStore = <?php echo json_encode($dataToStore); ?>;
localStorage.setItem('myDatabaseData', JSON.stringify(dataToStore));
</script>
