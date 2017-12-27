<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7551ee5a44caac44c0ff020dc0a28ed32bf1880a
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
<<<<<<< HEAD
    setTimeout(carousel, 6000); // Change image every 2 seconds
=======
    setTimeout(carousel, 8000); // Change image every 2 seconds
=======
var slideIndex = 0;
carousel();

function carousel() {
     var i;
    var x = document.getElementsByClassName("mySlides");
     for (i = 0; i < x.length; i++) {
      x[i].style.display  = "none";
    }
    slideIndex++;
     if (slideIndex > x.length) {slideIndex = 1}
     x[slideIndex-1].style.display = "block";
    setTimeout(carousel,  4000); // Change image every 4 seconds
>>>>>>> 1e61761a39b5fefef83a627841f66e288793d839
>>>>>>> 7551ee5a44caac44c0ff020dc0a28ed32bf1880a
}
