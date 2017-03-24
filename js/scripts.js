$(document).ready(function(){
  $("form#track").submit(function(event) {

  var aesthetics = $("#aesthetics").val();
  var type = $("#type").val();
  var company = $("#company").val();
  var root = $("#root").val();
  var media = $("#media").val();

  if (media === "Couldn't bear it, get me outside"){
    $("#out").fadeIn();
    $("#ruby").hide();
    $("#design").hide();
    $("#csharp").hide();
    $("#java").hide();
  }
  else if (aesthetics === "Looks"){
    $("#design").fadeIn();
    $("#ruby").hide();
    $("#java").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else if ((type === "Websites") && ((company === "Up and coming") || (root === "Underdog"))){
    $("#ruby").fadeIn();
    $("#design").hide();
    $("#java").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else if ((company === "Up and coming") || (root === "Safe")) {
    $("#java").fadeIn();
    $("#design").hide();
    $("#ruby").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else {
    $("#csharp").fadeIn();
    $("#design").hide();
    $("#ruby").hide();
    $("#java").hide();
    $("#out").hide();
  }
  event.preventDefault();
  });

  $("form#hello").submit(function(event) {
    var name = $("input#name").val();

    $("span#name").text(name);
    event.preventDefault();
  });

});
