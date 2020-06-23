// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    document.querySelector(".logo-img").style.height = "10rem";
    document.querySelector(".logo-img").style.width = "20rem";
    // document.getElementById("navbar").style.backgroundColor = "white";
  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.querySelector(".logo-img").style.height = "20rem";
    document.querySelector(".logo-img").style.width = "40rem";
    // document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, .5)";
  }
} 

//Hamburger controls
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", e => {
    hamburger.classList.toggle("active");

    if(hamburger.classList.contains("active")) {
        document.getElementById("navbar").style.height = "100vh";
        document.getElementById("navbar-right").style.display = "flex";
    } else {
        document.getElementById("navbar").style.height = "auto";
        document.getElementById("navbar-right").style.display = "none";
    }
})

window.addEventListener("resize", e => {
    if(window.innerWidth > 900) {
        document.getElementById("navbar-right").style.display = "flex";
        document.getElementById("navbar").style.height = "auto";
    } else {
        document.getElementById("navbar-right").style.display = "none";
    }
});