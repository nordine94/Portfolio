/*animation bouton menu responsive*/
const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.getElementsByClassName("nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

/*fonction*/
btnMenu.addEventListener("click", () => {

    ligne.classList.toggle("active") /*toggle = active/desactive */
    /*apparition du menu si on click sur le bouton*/ 
    nav.classList.toggle("menu-visible")
})

/*Fait disparaitre le menu quand on clique sur un lien*/
if(window.matchMedia("(max-width: 1300px)")) {
    /*Modif de Momo à la place du allItemNav.Foreach*/
    for (let item of allItemNav) {  
        item.addEventListener("click", () => {
            nav.classList.toggle("menu-visible")
            ligne.classList.toggle("active");
        }) 
    }
    /*allItemNav.foreach(item => {

       
    })*/
}

// Animation ecriture

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
    loop: false, // Animation s'arretera et ne tournera pas en boucle 
    deleteSpeed: 20 // vitesse d'effacement

})

typewriter // Création (methode chaining = les unes à la suite des autres)
  .pauseFor(1800) // 1800 secondes c'est le temp que les animations se fassent
  .changeDelay(20) // vitesse de frappe de l'écriture
  .typeString("Moi c'est Nordine Khoudou")
  .pauseFor(300) //petite pause avant la suite
  .typeString("<strong>, Développeur en formation !</strong>")
  .pauseFor(1000)
  .deleteChars(14) // supprime un nombre de caractère "en formation"
  .typeString("<span style='color: midnightblue;'> HTML</span> !")
  .pauseFor(1000)
  .deleteChars(6)
  .typeString("<span style='color: #27ae60;'> CSS</span> !")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString("<span style='color: #D300E3;'> Bootstrap</span> !")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("<span style='color: #7B7B7B;'> Wordpress</span> !")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("<span style='color: #DEE904;'> JavaScript</span> !")
  .start(); // Pour commencer l'animation


  // ANIMATION CONTACT

  const input_fields = document.querySelectorAll("input");

  for (let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];

    field.addEventListener("input", (e) => {
      if (e.target.value !== "") {
        e.target.parentNode.classList.add("animation"); // Si on ecrit pas animation 
      } else if (e.target.value == "") {
        e.target.parentNode.classList.remove("animation"); // si on ecrit dans le champ sa desactive l'animation 
      }
    })
  } // Demander à Momo pourquoi l'animation ne marche pas

  //ANIMATION D'APPARITION Greensock GSAPP + Scrollmagic

// On declare tout les elements de l'accueil en constante, l'aniamtion agira sur tous.
const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");// querySelectorAll c'est quand plusieur element ont la même classe, elle retournera un tableau de ses éléments.
const btnRondAccueil = document.querySelector(".btn-rond")

const TL1 = gsap.timeline({paused: true}); //TL1 = timeline 1. elle est de base sur pause

TL1 // suite d'animation
.to(navbar, {left: "0px", ease: Power3.easeOut, duration: 0.6}) //la navbar partira de -300px 0px en venant de la gauche
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})// y: -50 , le titre apparait de haut en bas.
.staggerFrom(btn, 1, {opacity: 0}, 0.2, "-=0.30") //stagger sert à prendre plusieur elements d'un tableau, vu qu'il y plusieur bouton
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, "-=0.75") //stagger sert à prendre plusieur elements d'un tableau, vu qu'il y plusieur bouton
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, "-=1")

window.addEventListener("load", () => { // qaund la page a chargé alors ..
  TL1.play();
})

// Animation présentation
const presentationContainer = document.querySelector(".presentation")
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche")
const listePres = document.querySelectorAll(".item-liste")

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration:0.6}, "-=0.5")
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, "-=0.5")

const controller = new ScrollMagic.Controller(); //le controller est là ou on mettra toutes nos animation avec scrollmagic

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer, // l'element à partir duquel l'aniamtion va être déclenché
  triggerHook: 0.5,
  reverse: true // False :cela veut dire que l'animation va se faire qu'une seule fois.
})
.setTween(tlpres)
//.addIndicators() ce sont tous les petites marquages sur la page pour ce repérer pour voir tout démarre l'animation
.addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
// .addIndicators()
.addTo(controller)

// Vague 2 

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
// .addIndicators()
.addTo(controller)

// Animation range

const sectionComp = document.querySelector(".section-range"); // élément à partir duquel l'animation va démarrer
const titreComp = document.querySelector(".titre-exp"); // titre qu'on va faire apparaitre
const allLabel = document.querySelectorAll(".label-skill") // label ou on a écrit nos compétences
const allPourcent = document.querySelectorAll(".number-skill") // les pourcentages de compétences
const allBarres = document.querySelectorAll(".barre-skill") // barre de compétence
const allShadowBarres = document.querySelectorAll(".barre-grises") // toutes les barres grises

const tlCompetences = new TimelineMax(); // création de la nouvelle timeline, ne pas rajouter d'accent à competences

tlCompetences // ajout des animations
.from(titreComp, {opacity: 0, duration: 0.6}) // on commence avec le titre
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, "-=0.5") // ensuite tous les label
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, "-=1") // ensuite tous les pourcentages
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, "-=1") // ensuite tous les barres grises
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, "-=1") // ensuite tous les barres grises

const scene5  = new ScrollMagic.Scene({ // ne pas oublier la majuscule à Scene
  triggerElement: sectionComp,
  reverse: false
})
.setTween(tlCompetences) // on ajoute la timeline créé au-dessus
.addTo(controller)