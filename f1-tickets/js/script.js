/* NAVBAR */

const navbar = document.getElementById("navbar");
const openNav = document.getElementById("openNav");
const closeNav = document.querySelector(".close-navbar");

if(openNav){
openNav.onclick = () =>{
navbar.style.top = "0";
}
}

if(closeNav){
closeNav.onclick = () =>{
navbar.style.top = "-100%";
}
}

/* LOADER F1 START LIGHTS */

window.onload = function(){

const loader = document.getElementById("loader");
const lights = document.querySelectorAll(".light");
const goText = document.querySelector(".go-text");

let index = 0;

function startLights(){

if(index < lights.length){

lights[index].classList.add("active");

index++;

setTimeout(startLights,300);

}else{

goText.style.opacity = 1;

setTimeout(()=>{
loader.style.display = "none";
},700);

}

}

setTimeout(startLights,500);

}

/* LOGIN SIGNUP TOGGLE */

const toggleLink = document.querySelector(".toggle-link");

if(toggleLink){

toggleLink.addEventListener("click",function(){

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if(loginForm.style.display !== "none"){

loginForm.style.display = "none";
signupForm.style.display = "block";
toggleLink.innerText = "Already have an account? Login";

}else{

loginForm.style.display = "block";
signupForm.style.display = "none";
toggleLink.innerText = "Don't have an account? Sign Up";

}

});

}

/* WAITLIST FORM SUBMIT */

const waitlistForm = document.getElementById("waitlistForm");

if(waitlistForm){

waitlistForm.addEventListener("submit",function(e){

e.preventDefault();

alert("You have successfully joined the waiting list!");

waitlistForm.reset();

});

}