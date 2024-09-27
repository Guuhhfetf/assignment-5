const navbar = document.getElementById('navbar');
const heading = document.getElementById('heading');
const navbarOffset = navbar.offsetTop;
const headingOffset =heading.offsetTop;

function stickyFunction (){
     if(window.pageYOffset>=navbarOffset){
        navbar.classList.add('sticky-navbar');                
     } 
     else{
         navbar.classList.remove('sticky-navbar')               
     }  
     if(window.pageYOffset>=headingOffset){
        heading.classList.add('sticky-heading');                
     } 
     else{
        heading.classList.remove('sticky-heading');                
     }               
}
window.onscroll = function(){
      stickyFunction ();                     
}
