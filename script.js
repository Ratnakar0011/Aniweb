/* =====================================================
   ANIWEB HERO SLIDER
   ===================================================== */


/* =====================================================
   SLIDE DATA
   ===================================================== */

const slides = [

    {
        title: "NARUTO",

        description:
            "Discover the world of ninjas, legendary battles and unforgettable characters in Naruto.",

        image:
            "./assets/naruto.jpg"
    },


    {
        title: "BLACK CLOVER",

        description:
            "Enter a world of magic, powerful rivals and the journey of Asta to become the Wizard King.",

        image:
            "./assets/black-clover.jpg"
    },


    {
        title: "ONE PIECE",

        description:
            "Set sail with Luffy and the Straw Hat crew as they chase adventure, treasure and the legendary One Piece.",

        image:
            "./assets/one-piece.jpg"
    }

];



/* =====================================================
   CURRENT SLIDE
   ===================================================== */

let currentSlide = 0;



/* =====================================================
   GET ELEMENTS
   ===================================================== */

const poster =
    document.getElementById("poster");


const title =
    document.getElementById("title");


const description =
    document.getElementById("description");


const slideNumber =
    document.getElementById("slideNumber");


const nextBtn =
    document.getElementById("nextBtn");


const prevBtn =
    document.getElementById("prevBtn");


/* =====================================================
   UPDATE SLIDE
   ===================================================== */

function updateSlide() {

    const slide =
        slides[currentSlide];


    /* Change poster */

    poster.src =
        slide.image;


    poster.alt =
        slide.title;


    /* Change title */

    title.textContent =
        slide.title;


    /* Change description */

    description.textContent =
        slide.description;


    /* Change number */

    slideNumber.textContent =
        String(currentSlide + 1).padStart(2, "0");


    /* Change background */

    document.getElementById("home").style.backgroundImage =

        `
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.90),
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.35)
        ),
        url("${slide.image}")
        `;

}



/* =====================================================
   NEXT
   ===================================================== */

nextBtn.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    updateSlide();

});



/* =====================================================
   PREVIOUS
   ===================================================== */

prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    updateSlide();

});



/* =====================================================
   INITIAL LOAD
   ===================================================== */

updateSlide();