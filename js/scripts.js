$(document).ready(function(event) {

  $("form#quiz").submit(function(event) {
    const identifyWith = $("#identify-with").val();
    const favoriteColor = $("#favorite-color").val();
    const preferredOrganization = $("#preferred-organization").val();

    // unhides ruby language result
    if (identifyWith === "precious-gems" && favoriteColor === "red") {
      $('#ruby').show();
    } 
    // unhides python language result
    else if (identifyWith === "snakes" && favoriteColor === "green") {
      $('#python').show();
    } 
    // unhides javascript language
    else if (identifyWith === "aesthetics" && favoriteColor === "yellow") {
      $('#javascript').show();
    } else {
      $('#javascript').show();
    }
  });
});