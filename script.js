
  var images = ["./images/image-1.jpg", "./images/image-2.jpg", "./images/image-3.jpg", "./images/image-4.jpg", "./images/image-5.jpg", "./images/image-6.jpg"];
  var slideIndex = 0;
  
  function showSlides() {
    var slide = document.getElementById("slide");
    slide.src = images[slideIndex];
    slideIndex++;
    if (slideIndex >= images.length) {
      slideIndex = 0;
    }
    setTimeout(showSlides, 2000);
  }
  
  showSlides();
