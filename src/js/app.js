// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(window.innerWidth > 900) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
      document.querySelector(".logo-img").style.height = "10rem";
      document.querySelector(".logo-img").style.width = "20rem";
      document.getElementById("navbar").style.backgroundColor = "white";
    } else {
      // document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
      document.querySelector(".logo-img").style.height = "20rem";
      document.querySelector(".logo-img").style.width = "40rem";
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .5)";
    }

  }
} 

//Hamburger controls
//The following code controls what happens when the user clicks on the hamburger button
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("active");

    if(hamburger.classList.contains("active")) {
        document.getElementById("navbar").style.height = "100vh";
        document.getElementById("navbar-right").style.display = "flex";
        document.getElementById("navbar-right").style.visibility = "visible";
    } else {
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar-right").style.display = "none";
        document.getElementById("navbar-right").style.visibility = "hidden";
    }
})

//If screen is resized whilst dropdown menu is active
window.addEventListener("resize", e => {
    if(window.innerWidth > 900) {
      hamburger.classList.remove("active");
      document.getElementById("navbar-right").style.display = "flex";
        document.getElementById("navbar-right").style.visibility = "visible";
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .5)";
        document.querySelector(".logo-img").style.height = "20rem";
    document.querySelector(".logo-img").style.width = "40rem";
    } else {
      document.getElementById("navbar-right").style.display = "none";
      document.getElementById("navbar-right").style.visibility = "hidden";
      document.getElementById("navbar").style.backgroundColor = "white";
      document.querySelector(".logo-img").style.height = "10rem";
    document.querySelector(".logo-img").style.width = "20rem";
    }
});

//Services page dropdown functionallity
const services = {
  decking: document.getElementById("decking"),
  fencing: document.getElementById("fencing"),
  paving: document.getElementById("paving"),
  wooden: document.getElementById("wooden"),
  turfing: document.getElementById("turfing")
};

const serviceLinks = document.querySelectorAll(".service-link");

serviceLinks.forEach(link => {
  link.addEventListener("click", e => {
    console.log(e.target);
    if(e.target.classList.contains("decking-link")) {
      services.decking.style.display = "grid";
      services.fencing.style.display = "none";
      services.paving.style.display = "none";
      services.wooden.style.display = "none";
      services.turfing.style.display = "none";

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 20);
    } else if(e.target.classList.contains("fencing-link")) {
      services.decking.style.display = "none";
      services.fencing.style.display = "grid";
      services.paving.style.display = "none";
      services.wooden.style.display = "none";
      services.turfing.style.display = "none";

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 20);
    } else if(e.target.classList.contains("paving-link")) {
      services.decking.style.display = "none";
      services.fencing.style.display = "none";
      services.paving.style.display = "grid";
      services.wooden.style.display = "none";
      services.turfing.style.display = "none";

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 20);
    } else if(e.target.classList.contains("wooden-link")) {
      services.decking.style.display = "none";
      services.fencing.style.display = "none";
      services.paving.style.display = "none";
      services.wooden.style.display = "grid";
      services.turfing.style.display = "none";

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 20);
    } else if(e.target.classList.contains("turfing-link")) {
      services.decking.style.display = "none";
      services.fencing.style.display = "none";
      services.paving.style.display = "none";
      services.wooden.style.display = "none";
      services.turfing.style.display = "grid";

      setTimeout(() => {
        window.scrollBy(0, -150);
      }, 20);
    }
  });
});