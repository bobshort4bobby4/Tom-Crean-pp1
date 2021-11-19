window.onload = function () {
	//window.addEventListener('scroll', function (e) {
	//	if (window.pageYOffset > 100) {
	//		document.querySelector("header").classList.add('is-scrolling');
	//	} else {
	//		document.querySelector("header").classList.remove('is-scrolling');
	//	}
	//})//;

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

}
	var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].setAttribute("style", "display:block;");
  //slides[slideIndex-1].style.display = "block"; causing error in lighthouse test replaced with line above
  
}
