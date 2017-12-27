<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7551ee5a44caac44c0ff020dc0a28ed32bf1880a
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
<<<<<<< HEAD
=======
=======
$(function() {
		var pull 		= $('#pull');
			menu 		= $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
					var w = $(window).width();
					if(w > 320 && menu.is(':hidden')) {
						menu.removeAttr('style');
					}
			});
	});
>>>>>>> 1e61761a39b5fefef83a627841f66e288793d839
>>>>>>> 7551ee5a44caac44c0ff020dc0a28ed32bf1880a
