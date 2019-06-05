function main() {
  $(".shup").hide();
  $(".shup").fadeIn(1000);
}

$(document).ready(function () {

    $('div.hidden').fadeIn(2500).removeClass('hidden');




});


var colors = ['#6564ff', '#0cffeb'];
var random_color = colors[Math.floor(Math.random() * colors.length)];

$('a#glow.shup').css('color', random_color);
$("body").css("border-color", random_color);
  $('a#glow.proj').css('color', random_color);
//var oof = $('a#glow.shup').css("color")
