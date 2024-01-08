function openPopup(day) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');
  
    popupContent.innerHTML = `<p>Ce lien renvoie vers quelque chose de spécial pour le jour ${day}!</p>`;
    
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
  