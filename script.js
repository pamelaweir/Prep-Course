// JavaScript Document
$(document).ready(function(){
	console.log("Script included!")
$( "input" ).on( "click", function() {
  $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
});
$( "img" ).click(function() {
  $( "img" ).fadeOut( "fast" );
});
   $('#text').dblclick(function() {
        $(this).toggleClass('highlighted');
    });
});
