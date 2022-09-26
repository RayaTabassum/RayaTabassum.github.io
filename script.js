//FUNCTION FOR SLIDESHOW (IMAGES CHANGING AUTOMATICALLY)
let slideIndex = 0;
showSlides();

function showSlides() {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length){slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides, 2000); //images change every 2 seconds
}

//SHOWING POSTED COMMENTS ON SCREEN
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue = document.getElementById("comment-box").value;
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li); 
});