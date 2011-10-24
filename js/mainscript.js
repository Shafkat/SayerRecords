//This file contains the main functionality of the site.

$(document).ready(function() {
	$('#player').hide();
	$("#records").hover(function () {
		$('#records_image').fadeOut(3000);
		$('#records_image').hide(2500, function() { $("#player").fadeIn(2500);});
		//$('#tabs').tabs();
	});
	
	$('#page-wrap').hide();
	$("#sayers_image").hover(function () {
	$('#sayers_image').fadeOut(2500);
	$('#sayers_image').hide(2500, function() { $("#page-wrap").fadeIn(3000);});
	});
});