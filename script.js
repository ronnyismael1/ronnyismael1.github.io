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

// Function to submit form to google sheet
document.addEventListener('DOMContentLoaded', function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxtUj7LvKp-7IOazihKXp2vh62_6WIXZhi_YY88cP-P3kwu1t3IYbIAUnodKelUyzYN/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent!"
        setTimeout(function(){ msg.innerHTML = "" }, 5000);
        form.reset()
      })
      .catch(error => {
        msg.innerHTML = "FAIL TO SEND MESSAGE!"
        setTimeout(function(){ msg.innerHTML = "" }, 5000);
        form.reset()
      })
  })
});
