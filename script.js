/* On sélectionne les élèments DOM sur lesquels on va mettre un listener (h1 et button) */
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day");
    const h1Element = document.querySelector("h1");

/* utilisation la methode forEach pr reiterer tous les boutons (liste de node dans le DOM)
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

            /* Création des coordonnées autour du nouveau bouton (rect1)  */
            let rect1 = {
                left: randomX,
                right: randomX + button.clientWidth,
                top: randomY,
                bottom: randomY + button.clientHeight
            };

            /* Récupération des coordonnées de placement de l'élément <h1> */
            let rect2 = h1Element.getBoundingClientRect();

            /* Vérification si collision des nouveaux <buttons> (rect1) avec l'élément <h1> (rect2)*/
            if (
                rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top
            ) {
                collision = true;
                /* Le processus serépète si collision avec <h1> */
                continue;  
            }

            buttons.forEach(function (otherButton) {
                if (otherButton !== button) {
                    let rect3 = otherButton.getBoundingClientRect();
                    
                    //je vérifie s'il y a collision entre les deux buttons (rect1 et rect3)
                    if (
                        rect1.left < rect3.right &&
                        rect1.right > rect3.left &&
                        rect1.top < rect3.bottom &&
                        rect1.bottom > rect3.top
                    ) {
                        // les boutons se superposent
                        collision = true;
                    }
                }
            });

        //tant que il y a collision, ramplace pour replacer les nouveaux boutons

        } while (collision); 
        //quand pas de collision, on replace le bouton dans l'endroit disponible
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";
    }
});



/* ************FONCTION ClickSon******************** */

function sonClick() {
    document.querySelector("audio").play()
}

//* *************FONCTION POUR OUVRIR PORTON ***************/
document.addEventListener("DOMContentLoaded", function() {
// Référence à l'élément porton
const porton = document.getElementById("porton");
const ouvertureSound = document.getElementById("ouvertureSound");
// Ajoute un écouteur pour détecter la fin de l'animation
porton.addEventListener("transitionend", function(event) {
// Assurez-vous que l'événement concerne la propriété 'transform'
if (event.propertyName === 'transform') {
// Rediriger vers la page du calendrier de l'Avent après l'animation
//window.location.href = "accueil.html";
}
});
// Ajoute un événement de clic à l'élément porton
porton.addEventListener("click", ouvrirPorton);
});
function ouvrirPorton() {
// Référence à l'élément porton
const porton = document.getElementById("porton");
const ouvertureSound = document.getElementById("ouvertureSound");
// Ajouter une classe pour l'animation d'ouverture
porton.classList.add("ouverture-porton");
// Désactiver la possibilité de cliquer à nouveau pendant l'animation
//porton.style.pointerEvents = "none";
// Déclenche la lecture du son
ouvertureSound.play();
setTimeout(function() {
//window.location.href = "accueil.html";
}, 5000); // Ajustez la durée de l'animation (en millisecondes)
}
