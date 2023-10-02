<section class="myitems-items__container">
    <div class="myitems-items__maintitle">
        <h2>Jeux que je possède</h2>
    </div>
    <div id="list-items" class="myitems-items__last-items-container"></div>
</section>









<template id="list-items-template">
    <div id="0" class="myitems-items__last-items item__Amstrad js-item">
        <div class="myitems-items__coverimage">
            <img id="js-maxclic" src="./assets/img/covers/no-photo.png" alt="artwork cover">
        </div>
        <div class="myitems-items__title">
            <h3>Titre</h3>
        </div>
        <div class="myitems-items__subtitle">
            <h4>sous titre</h4>
        </div>
        <div class="myitems-items__plateform">
            <p>plateforme</p>
        </div>
    </div>


    <div class="hidden__field">
        <div class="myitems-maxitem__title">
            <h3>Titre</h3>
        </div>
        <div class="myitems-maxitem__subtitle">
            <h4>sous titre</h4>
        </div>
        <div class="myitems-maxitem__plateform">
            <p>plateforme</p>
        </div>
        <div class="myitems-maxitem__year">
            <p>année</p>
        </div>
        <div class="myitems-maxitem__coverimage">
            <img src="./assets/img/covers/no-photo.png" alt="artwork cover">
        </div>
        <div class="myitems-maxitem__editor">
            <p>editeur</p>
        </div>
        <div class="myitems-maxitem__genre">
            <p>genre</p>
        </div>
        <div class="myitems-maxitem__subcontainer">
            <div class="myitems-maxitem__country">
                <p>Pays</p>
            </div>
            <div class="myitems-maxitem__ref">
                <p>reference</p>
            </div>
            <div class="myitems-maxitem__support">
                <p>support</p>
            </div>
        </div>
        <div class="myitems-maxitem__price">' . "111 articles à partir de 15€50" . '</p>
        </div>
        <div class="buttons__item ">
            <span class="btn__item btn__item--color-empty">Ajouter au caddie</span>
            <span class="btn__item btn__item--color-orange">Ajouter aux Favoris</span>
        </div>
    </div>
</template>






<template id="list-items-template2">
    <div id="0" class="collection-item__maincontainer">
        <div class="top-informations">
            <div class="select__bar">
                <input type="checkbox" name="selected" id="">
            </div>
            <div class="collection-items__coverimage">
                <img src="./assets/img/covers/no-photo.png" alt="">
            </div>

            <div class="collection-basicinfos__container">
                <div class="collection-items__title">
                    <h3>title - subtitle</h3>
                </div>
                <div class="collection-basicinfos__subcontainer">
                    <div class="collection-items__plateform">
                        <p>plateforme</p>
                    </div>
                    <div class="collection-items__editor">
                        <p>editeur</p>
                    </div>
                    <div class="collection-items__year">
                        <p>annee</p>
                    </div>
                </div>
            </div>
            <div class="arrow collection-arrow">
                <img id="arrow-img" src="./assets/svg/chevron-up-solid.svg" alt="">
            </div>
        </div>
        <div id="collection-items-bot" class="bot-informations hidden">
            <div class="select__bar"></div>
            <div class="bot-items__subcontainer">
                <div class="bot-items__prices">
                    <h4>Minimuim<span>€100,50</span></h4>
                    <h4>Moyen<span>€60,78</span></h4>
                    <h4>Maximum<span>€345,78</span></h4>
                </div>

                <div class="bot-items__date-state">
                    <h5>Ajouté <span>il y a 1 ans et 6 mois</span></h5>
                    <p>Très bon état - presque Mint</p>
                </div>
                <div class="bot-items__notes">
                    <h4>Notes <span id="edit-notes" class="edit-notes"> Editer les notes </span></h4>
                </div>
            </div>
        </div>
        <div id="collection-notes" class="note-informations hidden">
            <div class="select__bar"></div>
            <form class="form-notes" method="get" action="#" name"text-notes">
                <label htmlfor="input-notes">
                    <textarea id="input-notes" class="input-notes" name="notes" rows="10" cols="50"></textarea>
                </label>
                <button class="btn__collection btn__color-green" type="submit" formaction="#">Enregistrer</button>
                <button id="textarea-erase" class="btn__collection btn__color-empty">Annuler</button>
            </form>
        </div>
    </div>



</template>