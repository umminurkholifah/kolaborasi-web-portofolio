const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {

      // hapus semua active
      buttons.forEach(b => b.classList.remove('active'));

      // tambahkan ke yang diklik
      this.classList.add('active');

    });
  });

        const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  let target = +counter.getAttribute('data-target');
  let count = 0;

  let update = () => {
    let increment = target / 150;

    if (count < target) {
      count += increment;
      counter.innerText = Math.floor(count);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

const bars = document.querySelectorAll(".bar");

function animateBars(){
  bars.forEach(bar=>{
    let val = bar.getAttribute("data-progress");
    let label = bar.querySelector(".label");

    let percent = 0;

    let interval = setInterval(()=>{
      if(percent >= val){
        clearInterval(interval);
      } else {
        percent++;
        bar.style.width = percent + "%";
        label.innerText = percent + "%";
      }
    }, 15);
  });
}

window.addEventListener("scroll", function(){
  let sec = document.querySelector(".causes");
  let pos = sec.getBoundingClientRect().top;
  let screen = window.innerHeight;

  if(pos < screen - 100){
    animateBars();
  }
});

let index = 0;
const track = document.getElementById("track");
const slides = document.querySelectorAll(".icha-slide");

function updateSlide(){
  track.style.transform = "translateX(-" + (index * 100) + "%)";
}

function nextSlide(){
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

window.onscroll = function() {
            var header = document.getElementById("mainHeader");
            if (window.pageYOffset > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };