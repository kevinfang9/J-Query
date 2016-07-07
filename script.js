$(document).ready(function (){


   $("td[rowspan!='2']").click(function(){
    $(this).parent().children("[rowspan='2']").css("background", "lightgreen");
});
$("td[colspan!='2']").click(
function(){
	 $("td[colspan='2']").toggle();
});

   



});