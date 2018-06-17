$(document).ready(function(){

	$("#placing_row").click(function() {
	  $("#items").children().removeClass('col-xs-6 col-lg-6 col-md-6 col-sm-6');
	  $("#items").children().addClass('col-xs-12 col-lg-12 col-md-12 col-sm-12');
	  $('.items').removeClass('items_col');
	  $('.items').addClass('items_row');
	})

	$("#placing_col").click(function() {
	  $("#items").children().removeClass('col-xs-12 col-lg-12 col-md-12 col-sm-12');
	  $("#items").children().addClass('col-xs-6 col-lg-6 col-md-6 col-sm-6');
	  $('.items').removeClass('items_row');
	  $('.items').addClass('items_col');
	})

});