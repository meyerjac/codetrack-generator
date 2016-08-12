$(document).ready(function() {
  $(".input").submit(function(event) {
    var work = $("#work").val();
    var looks1 = $("#looks1").val();
    var looks2 = $("#looks2").val();
    var front = $("#front").val();

    $(".cssdev").hide();
    $(".phpdev").hide();
    $(".javadev").hide();
    $(".csharpdev").hide();
    $(".tryelse").hide();

// Java track done Done
    if (work === 'start' || work === 'care' || work === 'mid') && ('enterprise') && (looks1 === 'no' || looks1 === 'yes') && (looks2 === 'no' || looks ='little') && (front === 'backend' || front === 'frontend')){
      $('.javadev').show()

    else if ((work === 'mid' || work === 'care' || work === 'enterprise') && (looks1 === 'yes') && (looks2 === 'yes') && (front === 'frontend')){
      $('.cssdev').show()

    else if ((work === 'mid' || work === 'care' || work === 'enterprise') && (looks1 === 'no') && (looks2 === 'maybe') && (front === 'backend')){
    $('.phpdev').show()

    else if ((work === 'mid' || work === 'enterprise') && (looks1 === 'no') && (looks2 === 'no') && (front === 'backend' || front === 'frontend')){
    $('.csharpdev').show()

  event.preventDefault();
  console.log(work)
  console.log(looks1)
  console.log(looks2)
  console.log(front)

      });
      });
