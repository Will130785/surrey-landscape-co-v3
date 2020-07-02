//Upon page load
window.addEventListener("DOMContentLoaded", e => {
  if(window.innerWidth < 900) {
    logo.src = "src/img/sllogo-trans(1).png";
  }
})

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
const logo = document.querySelector(".logo-img");

function scrollFunction() {
  if(window.innerWidth > 900) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
      document.querySelector(".logo-img").style.height = "10rem";
      document.querySelector(".logo-img").style.width = "20rem";
      document.getElementById("navbar").style.backgroundColor = "white";
      logo.src = "src/img/sllogo-trans(1).png";
    } else {
      // document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
      document.querySelector(".logo-img").style.height = "20rem";
      document.querySelector(".logo-img").style.width = "40rem";
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .5)";
      logo.src = "src/img/sllogo-trans(dark).png";
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
        document.getElementById("navbar-right").style.visibility = "scroll";
    } else {
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar-right").style.display = "none";
        document.getElementById("navbar-right").style.visibility = "hidden";
    }
})

//If screen is resized whilst dropdown menu is active
window.addEventListener("resize", e => {
    if(window.innerWidth > 900 && document.documentElement.scrollTop < 80) {
        hamburger.classList.remove("active");
        document.getElementById("navbar-right").style.display = "flex";
        document.getElementById("navbar-right").style.visibility = "visible";
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .5)";
        document.querySelector(".logo-img").style.height = "20rem";
        document.querySelector(".logo-img").style.width = "40rem";
        logo.src = "src/img/sllogo-trans(dark).png";
        // services.decking.style.height = "60vh";
        // services.fencing.style.height = "60vh";
        // services.paving.style.height = "60vh";
        // services.wooden.style.height = "60vh";
        // services.turfing.style.height = "60vh";
    } else if(window.innerWidth > 900 && document.documentElement.scrollTop > 80) {
        document.getElementById("navbar-right").style.display = "flex";
        document.getElementById("navbar-right").style.visibility = "visible";
        // services.decking.style.height = "60vh";
        // services.fencing.style.height = "60vh";
        // services.paving.style.height = "60vh";
        // services.wooden.style.height = "60vh";
        // services.turfing.style.height = "60vh";
    } else {
      document.getElementById("navbar-right").style.display = "none";
      document.getElementById("navbar-right").style.visibility = "hidden";
      document.getElementById("navbar").style.backgroundColor = "white";
      document.querySelector(".logo-img").style.height = "10rem";
      document.querySelector(".logo-img").style.width = "20rem";
      logo.src = "src/img/sllogo-trans(1).png";
      // services.decking.style.height = "100vh";
      //   services.fencing.style.height = "100vh";
      //   services.paving.style.height = "100vh";
      //   services.wooden.style.height = "100vh";
      //   services.turfing.style.height = "100vh";
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

const header = document.querySelector(".header");

header.addEventListener("click", e => {
  console.log(e.target);
  e.preventDefault();
  if(e.target.classList.contains("decking-link")) {
    if(window.innerWidth > 900) {
      services.decking.style.height = "60vh";
    } else {
      services.decking.style.height = "100vh";
    }
    services.decking.style.width = "80vw";
    services.decking.style.overflow = "hidden";
    services.fencing.style.height = "0";
    // services.fencing.style.width = "0";
    services.fencing.style.overflow = "hidden";
    services.paving.style.height = "0";
    // services.paving.style.width = "0";
    services.paving.style.overflow = "hidden";
    services.wooden.style.height = "0";
    // services.wooden.style.width = "0";
    services.wooden.style.overflow = "hidden";
    services.turfing.style.height = "0";
    // services.turfing.style.width = "0";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  } else if(e.target.classList.contains("fencing-link")) {
    services.decking.style.height = "0";
    // services.decking.style.width = "0";
    services.decking.style.overflow = "hidden";
    if(window.innerWidth > 900) {
      services.fencing.style.height = "60vh";
    } else {
      services.fencing.style.height = "100vh";
    }
    services.fencing.style.width = "80vw";
    services.fencing.style.overflow = "hidden";
    services.paving.style.height = "0";
    // services.paving.style.width = "0";
    services.paving.style.overflow = "hidden";
    services.wooden.style.height = "0";
    // services.wooden.style.width = "0";
    services.wooden.style.overflow = "hidden";
    services.turfing.style.height = "0";
    // services.turfing.style.width = "0";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  } else if(e.target.classList.contains("paving-link")) {
    services.decking.style.height = "0";
    // services.decking.style.width = "0";
    services.decking.style.overflow = "hidden";
    services.fencing.style.height = "0";
    // services.fencing.style.width = "0";
    services.fencing.style.overflow = "hidden";
    if(window.innerWidth > 900) {
      services.paving.style.height = "60vh";
    } else {
      services.paving.style.height = "100vh";
    }
    services.paving.style.width = "80vw";
    services.paving.style.overflow = "hidden";
    services.wooden.style.height = "0";
    // services.wooden.style.width = "0";
    services.wooden.style.overflow = "hidden";
    services.turfing.style.height = "0";
    // services.turfing.style.width = "0";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  } else if(e.target.classList.contains("wooden-link")) {
    services.decking.style.height = "0";
    // services.decking.style.width = "0";
    services.decking.style.overflow = "hidden";
    services.fencing.style.height = "0";
    // services.fencing.style.width = "0";
    services.fencing.style.overflow = "hidden";
    services.paving.style.height = "0";
    // services.paving.style.width = "0";
    services.paving.style.overflow = "hidden";
    if(window.innerWidth > 900) {
      services.wooden.style.height = "60vh";
    } else {
      services.wooden.style.height = "100vh";
    }
    services.wooden.style.width = "80vw";
    services.wooden.style.overflow = "hidden";
    services.turfing.style.height = "0";
    // services.turfing.style.width = "0";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  } else if(e.target.classList.contains("turfing-link")) {
    services.decking.style.height = "0";
    // services.decking.style.width = "0";
    services.decking.style.overflow = "hidden";
    services.fencing.style.height = "0";
    // services.fencing.style.width = "0";
    services.fencing.style.overflow = "hidden";
    services.paving.style.height = "0";
    // services.paving.style.width = "0";
    services.paving.style.overflow = "hidden";
    services.wooden.style.height = "0";
    // services.wooden.style.width = "0";
    services.wooden.style.overflow = "hidden";
    if(window.innerWidth > 900) {
      services.turfing.style.height = "60vh";
    } else {
      services.turfing.style.height = "100vh";
    }
    services.turfing.style.width = "80vw";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  } else if(e.target.classList.contains("header")) {
    services.decking.style.height = "0";
    // services.decking.style.width = "0";
    services.decking.style.overflow = "hidden";
    services.fencing.style.height = "0";
    // services.fencing.style.width = "0";
    services.fencing.style.overflow = "hidden";
    services.paving.style.height = "0";
    // services.paving.style.width = "0";
    services.paving.style.overflow = "hidden";
    services.wooden.style.height = "0";
    // services.wooden.style.width = "0";
    services.wooden.style.overflow = "hidden";
    services.turfing.style.height = "0";
    // services.turfing.style.width = "0";
    services.turfing.style.overflow = "hidden";

    // setTimeout(() => {
    //   window.scrollBy(0, -150);
    // }, 20);
  }
});

//Textarea clear
const textarea = document.getElementById("message");
textarea.value = "";