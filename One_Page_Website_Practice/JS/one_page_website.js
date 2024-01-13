// Declared global Variables
var modal_1 = document.getElementById("myModal_1");
var modal_2 = document.getElementById("myModal_2");
var modal;

// Open the Modal
function openModal_1() {
    document.getElementById("myModal_1").style.display = "block";
    if (modal) {
        modal.style.display = "block";
     
    }
  }
  
  // Close the Modal
  function closeModal_1() {
    document.getElementById("myModal_1").style.display = "none";
    if (modal) {
        modal.style.display = "none";
       
    }
  }
  
  var slideIndex_1 = 1;
  showSlides_1(slideIndex_1);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides_1(slideIndex_1 += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides_1(slideIndex_1 = n);
  }
  
  function showSlides_1(n) {
    var i;
    var slides_1 = document.getElementsByClassName("mySlides_1");
    var dots = document.getElementsByClassName("demo");

    var captionText = document.getElementById("caption_1");
    
    if (n > slides_1.length) {slideIndex_1 = 1}
    if (n < 1) {slideIndex_1 = slides_1.length}
    for (i = 0; i < slides_1.length; i++) {
      slides_1[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides_1[slideIndex_1-1].style.display = "block";
    dots[slideIndex_1-1].className += " active";
    captionText.innerHTML = dots[slideIndex_1-1].alt;
  }

  
  // Whitebox 2 

 // Open the Modal
function openModal_2() {
    document.getElementById("myModal_2").style.display = "block";
    if (modal) {
        modal.style.display = "block";
       
    }
}

// Close the Modal
function closeModal_2() {
    document.getElementById("myModal_2").style.display = "none";
    
    if (modal) {
        modal.style.display = "none";
    
    }
}

var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
}

// Thumbnail image controls
function currentSlide_2(n) {
    showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
    var i2;
    var slides_2 = document.getElementsByClassName("mySlides_2");
    var dots_2 = document.getElementsByClassName("demo_2");

    var captionText_2 = document.getElementById("caption_2");

    if (n > slides_2.length) { slideIndex_2 = 1; }
    if (n < 1) { slideIndex_2 = slides_2.length; }

    for (i2 = 0; i2 < slides_2.length; i2++) {
        slides_2[i2].style.display = "none";
    }
    for (i2 = 0; i2 < dots_2.length; i2++) {
        dots_2[i2].className = dots_2[i2].className.replace(" active_2", "");
    }

    slides_2[slideIndex_2 - 1].style.display = "block";
    dots_2[slideIndex_2 - 1].className += " active_2";
    captionText_2.innerHTML = dots_2[slideIndex_2 - 1].alt;
}
