//Slider header
$('#slider_home').carousel({
    interval: 5000,
})


//Autoplay bloque reproductor
$(function() {
    $(".video").click(function() {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
});


//Slider de productos
$('#slider_productos').carousel({
	interval: 4000
});


//Subir al cielo
$(document).ready(function() {
	$(window).scroll(function() {
    	if ($(this).scrollTop() > 60) {
     		$('#btnTop').fadeIn();
    	} else {
    		$('#btnTop').fadeOut();
    	}
	});

	$('#btnTop').click(function() {
    	$("html, body").animate({
      		scrollTop: 0
    	}, 1000);
    	return false;
	});
});


//Mostrar logo
$(function() {
    $(window).on("scroll", function() {
        $(window).scrollTop() > 50 ? $(".img_hide").addClass("show-img") : $(".img_hide").removeClass("show-img")
    })
});