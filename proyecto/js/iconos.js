window.addEventListener("load", function(){
  const icono = document.querySelector("i");
  icono.addEventListener("click", function() {
    if (this.className == "fa-solid fa-bars") {
      this.className = "fa-solid fa-xmark";
    } else {
      this.className = "fa-solid fa-bars";
    }
  });

  const cards = document.querySelectorAll(".coord");
  cards.forEach(div => {
    div.addEventListener("click", function() {
        const urlDestino = this.dataset.url;
        
        if (urlDestino) {
            window.location.href = urlDestino;
        }
    });
  });
});