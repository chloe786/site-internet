/*navbar couleur scroll blanc*/
window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/*lier onglets avec pages*/

function toggleVilla(){    /*toggle = basculer*/
    const toggleVilla = document.querySelector('.villatoggle');
    const navbar = document.querySelector('navbar');
    villatoggle.classList.toggle('active');
    navbar.classList.toggle('active');    /*classList =chaine composée de la liste des classes*/
}

 
/*navbar responsive hamburger*/

const menuHamburger = document.querySelector(".menu-hamburger")  /*querySelector = retourne le premier Element dans le document correspondant au sélecteur*/
const navbar = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navbar.classList.toggle('mobile-menu')
})
