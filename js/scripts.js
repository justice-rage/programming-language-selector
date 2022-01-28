$(document).ready(function(event) {

  $("form#quiz").submit(function(event) {
    const identifyWith = $("#identify-with").val();
    const favoriteColor = $("#favorite-color").val();
    const preferredOrganization = $("#preferred-organization").val();

    // unhides ruby language result
    if (identifyWith === "precious-gems" && favoriteColor === "red") {
      $('#ruby').show();
      $("#python").hide();
      $("#javascript").hide();
    } 
    // unhides python language result
    else if (identifyWith === "snakes" && favoriteColor === "green") {
      $('#python').show();
      $("#ruby").hide();
      $("#javascript").hide();
    } 
    // unhides javascript language result
    else if (identifyWith === "aesthetics" && favoriteColor === "yellow") {
      $('#javascript').show();
      $("#python").hide();
      $("#ruby").hide();
    } else {
      $('#javascript').show();
      $("#python").hide();
      $("#ruby").hide();
    }
    event.preventDefault();
  });
});