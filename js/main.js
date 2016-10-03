$(document).ready(function(){
	//hide all the things
	$("#contactlink").hide();
	$(".menu").hide();

	$("#mail").click(function(){
		$(".contact").toggleClass("extend");
		$("#mail").toggleClass("spin");
		$("#contactlink").toggle();
	});
	$("#menopen").click(function(){
		$(".menu").show();
		$(".menu ~ *").css("opacity","0.1");
	});
	$("#menclose").click(function(){
		$(".menu").hide();
		$(".menu ~ *").css("opacity","1");
	});

	//menu scroll switch states...Stick to top when below
	var distance = $('#menopen').offset().top,
    $window = $(window);
    //console.log(distance);

	$window.scroll(function() {
    if ($window.scrollTop() >= distance) {
        $("#menopen").addClass("menfixed");
    }
    else{
    	$("#menopen").removeClass("menfixed");
    }
});

	

	//timeout for email animation
	setTimeout(function(){$(".contact").animate({opacity:1},600);},300);
});