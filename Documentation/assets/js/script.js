/*!
 * Documenter 2.0
 * http://rxa.li/documenter
 *
 * Copyright 2011, Xaver Birsak
 * http://revaxarts.com
 *
 */
 
$(document).ready(function() {
	$("#documenter_sidebar ul a").on("click", function() {
		$("#documenter_sidebar ul a.current").removeClass("current");
		$(this).addClass("current");
	})
	
});