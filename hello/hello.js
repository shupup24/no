function main() {
  $(".dinky").hide();
  $(".dinky").slideUp(3500);
  $(".dinky").fadeIn(1000);
}

$(".dinky").on("click", function() {
//$(".dinky").css("background-color", "#050505");
$(this).toggleClass("oof");
$(".dinky").toggleClass("oof2")
$("body").toggleClass("change");
})



/*$("a[href='#bottom']").click(function() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
});*/


//$(".dinky").on("click", function () {
 //$("body").toggleClass("change";)
//})

$(document).ready(main);

//function main() {

//$(".dinky").on("click", function() {
//$("this").toggle("background-color", "#050505");
//$(".dinky").css("color", "#fff")
//$("body").css("background-color", "#050505")
//})
