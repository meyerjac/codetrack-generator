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

    if (looks1 === 'tr' && looks2 === 'yes' && front === 'frontend')
      $('.cssdev').slideDown()
    else if (work === 'mid' || work === 'enterprise' && looks1 === 'tr' && looks2 === 'no' && front === 'backend')
      $('.phpdev').slideDown()
    else if (work === 'enterprise' && looks1 === 'fl' && looks2 === 'no' && front === 'backend')
      $('.csharpdev').slideDown()
    else if (work === 'start' || work ==='mid' || work === 'enterprise' && looks1 === 'tr' && looks2 === 'no' && front === 'backend' || front === 'frontend')
        $('.javadev').slideDown()

  event.preventDefault();

  console.log(work)
  console.log(looks1)
  console.log(looks2)
  console.log(front)
  console.log(song)

  });
});
