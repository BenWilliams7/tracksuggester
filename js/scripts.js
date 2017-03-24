$(document).ready(function(){
  $("form#dob").submit(function(event) {

  var month = $("#month").val();
  var dob = parseInt($("input#day").val());

  // if (month === "January" && day < 15){
  //   $("#virgo").show();
  // }

  if (month === "January"){
    $("#virgo").show();
  }
  else {
    $("#cancer").show();
  }
  event.preventDefault();
  });
});
