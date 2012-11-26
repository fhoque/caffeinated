$(document).ready(function(){
	
	$(".fundamentals").click(function(){
		document.location.href='fundamentals.html';
	}).hover(function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/learn.jpg"); 
			});
		}, 
		function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/caffeinated.png"); 
			});
		}
	);
	
	$(".beginner").click(function(){
		document.location.href='beginner.html';
	}).hover(
		function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/beginner.jpg"); 
			});
		}, 
		function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/caffeinated.png"); 
			});
		}
	);
		
	$(".advanced").click(function(){
		document.location.href='advanced.html';
	}).hover(
		function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/advanced.jpg"); 
			});
		}, 
		function(){
			$("#imgHolder img").fadeOut(function() { 
			  $(this).load(function() { $(this).fadeIn(); }); 
			  $(this).attr("src", "images/caffeinated.png"); 
			});
		}
	);
	
});

/*
$(window).load(function() {
	$('.flexslider').flexslider({
			start: function(slider){
				$("#buttons button :eq(0)").addClass("highlight");
			},
			after: function(slider){
				switch(slider.currentSlide){
					case 0:
						$("#buttons button :eq(0)").addClass("highlight");
						$("#buttons button :eq(1)").removeClass("highlight");
						$("#buttons button :eq(2)").removeClass("highlight");;
						break;
					case 1: 
						$("#buttons button :eq(0)").removeClass("highlight");
						$("#buttons button :eq(1)").addClass("highlight");
						$("#buttons button :eq(2)").removeClass("highlight");
						break;
					case 2:
						$("#buttons button :eq(0)").removeClass("highlight");
						$("#buttons button :eq(1)").removeClass("highlight");
						$("#buttons button :eq(2)").addClass("highlight");
						break;
					}
			}
	});
});
*/