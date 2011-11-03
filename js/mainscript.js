//This file contains the main functionality of the site.

$(document).ready(function() {
	$('#player').hide();
	$('#records_right').css('opacity', 0);
	$("#records_image").hover(function () {
		$('#records_image').fadeOut(3000);
		$('#records_image').hide(2500, function() { $("#player").fadeIn(2500); $('#records_right').css('opacity', 0.5);});
	});
	
	$("#records_right").mouseenter(function (){
        $("#records_right").css('opacity', 0.75);
    });
    
    $("#sayers_right").mouseleave(function (){
        $("#records_right").css('opacity', 0.5);
    });
    
	$('#page-wrap').hide();
    $('#sayers_left').css('opacity', 0);
    $('#sayers_right').css('opacity', 0);
	$("#sayers_image").hover(function () {
	$('#sayers_image').fadeOut(2500);
	$('#sayers_image').hide(2500, function() { 
		$("#page-wrap").fadeIn(3000);
		$('#sayers_left').css('opacity', 0.5);
	    $('#sayers_right').css('opacity', 0.5);
		});
	});
    
    $("#sayers_left").mouseenter(function (){
        $("#sayers_left").css('opacity', 0.75);
        $("#sayers_right").css('opacity', 0.75);
    });
    
    $("#sayers_right").mouseenter(function (){
        $("#sayers_left").css('opacity', 0.75);
        $("#sayers_right").css('opacity', 0.75);
    });
    
    $("#sayers_left").mouseleave(function (){
        $("#sayers_left").css('opacity', 0.5);
        $("#sayers_right").css('opacity', 0.5);
    });
    
    $("#sayers_right").mouseleave(function (){
        $("#sayers_left").css('opacity', 0.5);
        $("#sayers_right").css('opacity', 0.5);
    });
});