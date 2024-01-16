const links = [
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
  "lien_pour_jour_17"
];

function openPopup(day) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');
  
    const link = `<a href="${links[day - 1]}" target="_blank">Clique ici !</a>`;
    popupContent.innerHTML = link;
    
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
  