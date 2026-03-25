window.addEventListener("DOMContentLoaded",function(){

const footer=document.querySelector(".footer");

function revealFooter(){
const footerTop=footer.getBoundingClientRect().top;
const windowHeight=window.innerHeight;

if(footerTop < windowHeight-100){
footer.classList.add("visible");
}
}

window.addEventListener("scroll",revealFooter);
revealFooter();

});

function clearForm(e){
e.preventDefault();
document.getElementById("contactForm").reset();
alert("Message Sent Successfully");
}