$(document).ready(function () {

    
    $("td[rowspan="2"]").click(function () {
       $(this).css("background","gold")
    });
 $("td[rowspan="1"]").click(function () {
       $(this).css("background","blue")
     });



});