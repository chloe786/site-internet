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






/*CAROUSEL*/
/*const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.r');
const precedent = document.querySelector('.g');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else{
        count = 0;
    }

    items[count].classList.add('active')
    consolelog(count);
}
suivant.addEventListener('click',slideSuivante)*/





/*document.body.onload=function(){
    nbr=9;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage=url("BTS SNIR 2022-2023\Informatique\Navbar_Carousel\PROJET\images\im1"+i+".jpeg");
        container.appendChild(div);
    }
}

g.onclick=function(){
    p--;
    container.style.transform="translate("+p*800+"px)";
}


'images"+i+".jpeg'*/