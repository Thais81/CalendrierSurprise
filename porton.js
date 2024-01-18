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
    