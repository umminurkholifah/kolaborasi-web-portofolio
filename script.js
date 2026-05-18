function kirimPesan(){
   alert("Message sent successfully 🚀");
}

/* EFFECT CARD DESKTOP ONLY */
if(window.innerWidth > 768){

  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 25);
      const rotateY = ((centerX - x) / 25);

      card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

  });

window.addEventListener("DOMContentLoaded", () => {

  const bars = document.querySelectorAll(".progress-bar");

  // reset dulu ke 0 biar animasi kelihatan
  bars.forEach(bar => {
    bar.style.width = "0%";
  });

  setTimeout(() => {
    document.querySelector(".javascript-bar").style.width = "20%";
    document.querySelector(".css-bar").style.width = "30%";
    document.querySelector(".html-bar").style.width = "35%";
    document.querySelector(".vscode-bar").style.width = "40%";
    document.querySelector(".figma-bar").style.width = "35%";
  }, 300);

});
}