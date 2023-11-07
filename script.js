// Function to select different tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Function to open/close side menu
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  var sidemenu = document.getElementById("sidemenu");

  sidemenu.style.right = "0";
}
function closemenu() {
  var sidemenu = document.getElementById("sidemenu");
  sidemenu.style.right = "-200px";
}
