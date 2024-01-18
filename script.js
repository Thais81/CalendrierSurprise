const sources={
  links:[
    "https://www.linkedin.com/in/mohamad-almustafa-3502a469/",
    "https://www.linkedin.com/in/caroline-berg%C3%A9-396646109/",
    "https://www.linkedin.com/in/elisa-bothy-a457b1225/",
    "https://www.linkedin.com/in/joan-paupardin-a448022a0/",
    "https://www.linkedin.com/in/juliette-rat-b36b42216/",
    "https://www.linkedin.com/in/valentina-sarais-85a2ab90/",
    "https://www.linkedin.com/in/wiame-elalami/",
    "https://www.linkedin.com/in/tha%C3%AFs-genin-291647271/",
    "https://www.linkedin.com/in/k%C3%A9vin-hoppenot-47066b149/",
    "https://www.linkedin.com/in/ralph-lee-a8b536213/",
    "https://www.linkedin.com/in/igor-martellote/",
    "https://www.linkedin.com/in/federico-manca-48a9981b9/",
    "https://www.linkedin.com/in/klervia-picaud-9508022a0/",
    "https://www.linkedin.com/in/guillaume-rostagnat-299002200/",
    "https://www.linkedin.com/in/anastasiia-shlapak/",
    "https://www.linkedin.com/in/am%C3%A9lie-solanas-pruvost-49a589242/",
    "lien_pour_jour_17"],
  images:[
    "./assets/avatar/mohamad.webp",
    "./assets/avatar/caroline.webp"
  ]}

<<<<<<< HEAD
document.querySelectorAll("a").target="_blank";

for (let i=0; i<1; i++)
{ const div=document.getElementById(i);
  // const lien=div.querySelector("a");
  // lien.href=sources.links[i];
  const avatar=div.querySelector("img");
  avatar.scr.SetAttribute(src, sources.images[i]);
}
=======
function openPopup(day) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');
  
    const link = link[0];
    popupContent.innerHTML = link[0];
    
    popup.style.display = 'block';
  
    closeBtn.onclick = function() {
      popup.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    };
  }
  
>>>>>>> origin/main

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
