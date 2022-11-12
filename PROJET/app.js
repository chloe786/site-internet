/*navbar couleur scroll*/
window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*lier onglet avec page*/

function toggleVilla(){
    const toggleVilla = document.querySelector('.villatoggle');
    const navbar = document.querySelector('navbar');
    villatoggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

 
/*navbar responsive hamburger*/

const menuHamburger = document.querySelector(".menu-hamburger")
const navbar = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navbar.classList.toggle('mobile-menu')
})