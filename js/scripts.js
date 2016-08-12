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

    if (work === 'start') {
      $('.javadev').show()
    }


  event.preventDefault();
  console.log(work)

      });
      });
