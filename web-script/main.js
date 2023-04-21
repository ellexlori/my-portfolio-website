//NAV BAR
function myFunction() { // Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon. //
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}