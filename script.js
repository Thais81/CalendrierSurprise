document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day");

    /* j'utilise la methode forEach pr reiterer tous les boutons (liste de node dans le DOM)
     envoyé dal queryselectorAll (".day")*/
    buttons.forEach(function (button) {
        PositionButtonRandom(button);
    });

    function PositionButtonRandom(button) {
        let randomX, randomY;
        let collision;

        do {
            collision = false;
            /******* Pour eviter le depassement des bouton dans dans la fênetre) : *******/
            /*génération random des X et de Y correspond à funct math.random()*
            - largeur de la fenêtre (window.innerWidth) - largeur du bouton (button.clientWidth)
            - la hauteur de la fenêtre (button.clientHeight) - hauteur fenêtre (window.innerHeight).*/ 
            randomX = Math.random() * (window.innerWidth - button.clientWidth);
            randomY = Math.random() * (window.innerHeight - button.clientHeight);

            //après le positionnement aleatoire des buton je veux eviter la sovrapposition
            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    // je crée une boîte autour d'un nouveau button (rect1)
                    let rect1 = {
                        left: randomX,
                        right: randomX + button.clientWidth,
                        top: randomY,
                        bottom: randomY + button.clientHeight
                    };
                    
                    // je récup la position du button existant avce cette methode (rect2) > voir WEBdoc
                    let rect2 = otherButton.getBoundingClientRect();

                    //je vérifie s'il y a collision entre les deux button
                    if (
                        rect1.left < rect2.right &&
                        rect1.right > rect2.left &&
                        rect1.top < rect2.bottom &&
                        rect1.bottom > rect2.top
                    ) {
                        // les buttons se sovrapposent
                        collision = true;
                    }
                }
            });

        //tant que il y a collision, je refais un randomplace pour mes buttons
        } while (collision);

        //quand pas de collision, on replace le buton dans l'endroit dispo
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";
    }
});
