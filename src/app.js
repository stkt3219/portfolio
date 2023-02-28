
const slides = document.querySelectorAll(".slide"); // select all slides

//set each slides translateX property to index * 100
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
})

let currentSlide = 0; //current slide counter
const nextSlide = document.querySelector(".next"); //select next button
let maxSlide = slides.length - 1; //max number of slides

nextSlide.addEventListener("click", function(){
    
    //if current slide is greater than the max number of slides, reset slides back to zero
    if (currentSlide === maxSlide){
        currentSlide = 0;
    }
    else{
        currentSlide++;
    }

    //each slide moves horizontally to the left by 100% when the next button is clicked
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
})

const prevSlide = document.querySelector(".prev"); //select prev button

prevSlide.addEventListener("click", function(){

    //if current slide is equal to 0, it will move the slide back to the last one
    if (currentSlide === 0){
        currentSlide = maxSlide;
    }
    else{
        currentSlide --;
    }

    //each slide moves horizontally to the left by 100% when the next button is clicked
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
})

