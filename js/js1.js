//CODE FOR CAROUSEL

var slideIndex = 0,pause,j,pic;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  pause=setTimeout(showSlides, 2000); // Change image every 2 seconds
}
pic=document.getElementsByClassName("pics");
for (j = 0; j < pic.length; j++) {
  pic[j].addEventListener("mouseover", function(){
    clearInterval(pause);
  });
}

for (j = 0; j < pic.length; j++) {
  pic[j].addEventListener("mouseout", function(){
    showSlides();
  });
}
//---------------------------------------------------------------------------------------------------------------------------------------------

//CODE FOR 'COURSES' MODAL

var modal = document.getElementById('coursesModalId');
var btn = document.getElementById("allCoursesBtn");
var span = document.getElementsByClassName("close")[0];

//modal trigger
btn.addEventListener("click",function() {
  modal.style.display = "block";
});

//close the modal
span.addEventListener("click",function() {
  modal.style.display = "none";
});

//clicking outside the modal
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


//----------------------------------------------------------------------------------------------------------------------------------------------
//CODE FOR IMAGE MODAL
document.getElementById("middleimagebtn").addEventListener("click",function() {
  modal.style.display = "block";
});

//close the modal
span.addEventListener("click",function() {
  modal.style.display = "none";
});

//clicking outside the modal
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//CODE FOR 'EVENTS' MODAL
//MODAL 1
// Get the modal
var modal1 = document.getElementById('eventsMyModal1');
var imgone = document.getElementById('eventsId1');
var img_one = document.getElementById('eventsId01');
var modalImg1 = document.getElementById("img01");
imgone.addEventListener("click",function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
});
img_one.addEventListener("click",function(){
  modal1.style.display = "block";
  modalImg1.src = "images/event1_15.png";
});

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// close the modal
span1.addEventListener("click",function(){
  modal1.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});

//MODAL 2
var modal2 = document.getElementById('eventsMyModal2');
var imgtwo = document.getElementById('eventsId2');
var img_two = document.getElementById('eventsId02');
var modalImg2 = document.getElementById("img02");
imgtwo.addEventListener("click",function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
});
img_two.addEventListener("click",function(){
  modal2.style.display = "block";
  modalImg2.src = "images/event4_20.png";
});

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// close the modal
span2.addEventListener("click",function(){
  modal2.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

//MODAL 3
var modal3 = document.getElementById('eventsMyModal3');
var imgthree = document.getElementById('eventsId3');
var img_three=document.getElementById('eventsId03')
var modalImg3 = document.getElementById("img03");
imgthree.addEventListener("click",function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
});
img_three.addEventListener("click",function(){
  modal3.style.display = "block";
  modalImg3.src = "images/event3_18.png";
});

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// close the modal
span3.addEventListener("click",function(){
  modal3.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});

//MODAL 4
var modal4 = document.getElementById('eventsMyModal4');
var imgfour = document.getElementById('eventsId4');
var img_four = document.getElementById('eventsId04');
var modalImg4 = document.getElementById("img04");
imgfour.addEventListener("click",function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
});
img_four.addEventListener("click",function(){
  modal4.style.display = "block";
  modalImg4.src = "images/event2_15.png";
});

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// close the modal
span4.addEventListener("click",function(){
  modal4.style.display = "none";
});
window.addEventListener("click",function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//GALLERY MODAL
//MODAL 1
// Get the modal
var glryModal1 = document.getElementById('galleryModal1');
var glryImg1 = document.getElementById('galleryPic1');
var glryModalImg1 = document.getElementById("galleryImg01");
glryImg1.addEventListener("click",function(){
  glryModal1.style.display = "block";
  glryModalImg1.src = "images/pic1.jpg";
});

// Get the <span> element that closes the modal
var glrySpan1 = document.getElementsByClassName("glry-close1")[0];

// Close the modal
glrySpan1.addEventListener("click",function(){
  glryModal1.style.display = "none";
});

//MODAL 2
// Get the modal
var glryModal2 = document.getElementById('galleryModal2');
var glryImg2 = document.getElementById('galleryPic2');
var glryModalImg2 = document.getElementById("galleryImg02");
glryImg2.addEventListener("click",function(){
  glryModal2.style.display = "block";
  glryModalImg2.src = "images/college.jpg";
});

// Get the <span> element that closes the modal
var glrySpan2 = document.getElementsByClassName("glry-close2")[0];

// Close the modal
glrySpan2.addEventListener("click",function(){
  glryModal2.style.display = "none";
});

//MODAL 3
// Get the modal
var glryModal3 = document.getElementById('galleryModal3');
var glryImg3 = document.getElementById('galleryPic3');
var glryModalImg3 = document.getElementById("galleryImg03");
glryImg3.addEventListener("click",function(){
  glryModal3.style.display = "block";
  glryModalImg3.src = "images/CommunityCentercourt.jpg";
});

// Get the <span> element that closes the modal
var glrySpan3 = document.getElementsByClassName("glry-close3")[0];

// Close the modal
glrySpan3.addEventListener("click",function(){
  glryModal3.style.display = "none";
});

//MODAL 4
// Get the modal
var glryModal4 = document.getElementById('galleryModal4');
var glryImg4 = document.getElementById('galleryPic4');
var glryModalImg4 = document.getElementById("galleryImg04");
glryImg4.addEventListener("click",function(){
  glryModal4.style.display = "block";
  glryModalImg4.src = "images/download.jpg";
});

// Get the <span> element that closes the modal
var glrySpan4 = document.getElementsByClassName("glry-close4")[0];

// Close the modal
glrySpan4.addEventListener("click",function(){
  glryModal4.style.display = "none";
});

//MODAL 5
// Get the modal
var glryModal5 = document.getElementById('galleryModal5');
var glryImg5 = document.getElementById('galleryPic5');
var glryModalImg5 = document.getElementById("galleryImg05");
glryImg5.addEventListener("click",function(){
  glryModal5.style.display = "block";
  glryModalImg5.src = "images/Seminar Hall.jpg";
});

// Get the <span> element that closes the modal
var glrySpan5 = document.getElementsByClassName("glry-close5")[0];

// Close the modal
glrySpan5.addEventListener("click",function(){
  glryModal5.style.display = "none";
});

//MODAL 6
// Get the modal
var glryModal6 = document.getElementById('galleryModal6');
var glryImg6 = document.getElementById('galleryPic6');
var glryModalImg6 = document.getElementById("galleryImg06");
glryImg6.addEventListener("click",function(){
  glryModal6.style.display = "block";
  glryModalImg6.src = "images/basketball-court.jpg";
});

// Get the <span> element that closes the modal
var glrySpan6 = document.getElementsByClassName("glry-close6")[0];

// Close the modal
glrySpan6.addEventListener("click",function(){
  glryModal6.style.display = "none";
});

//------------------------------------------------------------------------------------------------------------------------------------------------------
//MAP
function initMap() {
  var loc = {lat: 13.2432941, lng: 77.5496145};
  var map = new google.maps.Map(document.getElementById('theMap'), {
    zoom: 15,
    center: loc, mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}
