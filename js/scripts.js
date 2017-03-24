$(document).ready(function(){
  $("form#track").submit(function(event) {

  var aesthetics = $("#aesthetics").val();
  var type = $("#type").val();
  var company = $("#company").val();
  var root = $("#root").val();
  var media = $("#media").val();

  if (media === "Couldn't bear it, get me outside"){
    $("#out").show();
    $("#ruby").hide();
    $("#design").hide();
    $("#csharp").hide();
    $("#java").hide();
  }
  else if (aesthetics === "Looks"){
    $("#design").show();
    $("#ruby").hide();
    $("#java").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else if ((type === "Websites") && company === "Up and coming"){
    $("#ruby").show();
    $("#design").hide();
    $("#java").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else if (type === "Up and coming"){
    $("#java").show();
    $("#design").hide();
    $("#ruby").hide();
    $("#csharp").hide();
    $("#out").hide();
  }
  else {
    $("#csharp").show();
    $("#design").hide();
    $("#ruby").hide();
    $("#java").hide();
    $("#out").hide();
  }
  event.preventDefault();
  });
});
