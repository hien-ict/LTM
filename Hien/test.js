//Menu tab
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function showtab(tabname) {
    hiddenTabs();
    document.getElementById("tab-" + tabname).className = "block2-1";
    document.getElementById(tabname).className = tabname + " active-menu-tab";
}

function hiddenTabs() {
    var tab = document.getElementById('menutab').children;
    for (i = 0; i < tab.length; i++) {
        tab[i].children[0].className = "";
    }
    var tabs = document.getElementById('tab-content').children;
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = "hidden";
    }
}


//SlideSHow
var slideIndex = 1;

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
    timer = setInterval("plusSlides(1)", 5000)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("tinhot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);
timer = setInterval("plusSlides(1)", 5000)


var slideIndex2 = 1;

function plusSlides2(n) {
    clearTimeout(timer2);
    showSlides2(slideIndex2 += n);
    timer2 = setInterval("plusSlides2(1)", 5000)
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("b1");
      var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
    slides[slideIndex2 - 1].style.display = "block";
      dots[slideIndex2-1].className += " active";
}

showSlides2(slideIndex2);
timer2 = setInterval("plusSlides2(1)", 6000)
