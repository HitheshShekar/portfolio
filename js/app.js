const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

AOS.init({
  duration: 1000, // Duration of animation
  easing: 'ease-in-out', // Animation easing
  once: false, // Set this to false to animate every time you scroll
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();


new TypeIt("#dynamic-text", {
  speed: 80,
  loop:true,
  startDelay: 900
})

//Developer
.type('Developer,')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('<em>Like to code on MAC & RRC of the protocol stack</em>')
  .pause(500)
  .delete()

//Researcher
  .type('Researcher,')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('Currently understanding on the digital twin RAN')
  .pause(500)
  .delete()

//End-toend tester
  .type('End-to-End Tester')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('<em>I like to check the network capabilities</em>')
  .pause(500)
  .delete()

//Enthusiast
  .type('Enthusiast')
  .pause(500)
  .break()
  .break({delay: 500})
  .type('Learning new updates on 5G & 6G')
  .pause(500)
  .delete()
  .go();

  function closeSidebar() {
    sidebar.classList.remove("show-sidebar");
  }

  //Contact Form Validation
  function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "<p class=\"warning\">Please Enter valid Name</p>" ;
      error_message.innerHTML = text;
      return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "<p class=\"warning\">Please Enter valid Email</p>";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 10){
      text = "<p class=\"warning\">Please Enter Atleast 10 characters</p>";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }