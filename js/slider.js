var slideIndex = 1;
showSlide(slideIndex);

setInterval(addSlide, 10000, 1);

function addSlide(index) {
  slideIndex += index;
  showSlide();
}

function currentSlide(index){
  showSlide(slideIndex = index);
}

function showSlide(index) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var rect = document.getElementsByClassName("slider-nav-rect");
    
  if (slideIndex > slides.length) 
    slideIndex = 1;
  if (slideIndex < 1)
    slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < rect.length; i++) {
    rect[i].className = rect[i].className.replace("active","");
  }

  slides[slideIndex - 1].style.display = "block";
  rect[slideIndex - 1].className+=" active";
}