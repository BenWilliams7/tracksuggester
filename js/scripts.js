$(document).ready(function(){
  $("form#track").submit(function(event) {

  var aesthetics = $("#aesthetics").val();


  if (aesthetics === "Looks"){
    $("#ruby").show();
  }
  else {
    $("#java").show();
  }
  event.preventDefault();
  });
});
