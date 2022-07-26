//creare array di immagini 
const slides = [ './img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg' ];
// console.log(slides);

//richiamare l'elemento slider-wrapper
const sliderWrapper = document.querySelector('.slider-wrapper');

//creare array e currentIndex per evento 'click'
let slideActiveElements = [];
let currentIndex = 0;

// generare il contenuto dello slider
for(let i=0; i<slides.length; i++) {
    //allegare le immagini dell'array alla variabile src
    const src = slides[i];
    //creare l'elemento li nel DOM ed assegnargli la classe 'slide' (già stilizzata in CSS)
    const li = document.createElement('li');
    li.classList.add('slide');
    //creare la condizione per cui la prima immagine avrà la classe 'active' e sarà quindi visibile nella pagina
    if(i===currentIndex){
        li.classList.add('active');
    }
    //creare l'elemento img ed associarli come 'src' le stringhe contenute nell'array 'slides' che rimandano al percorso del file img (simile a metodo per aggiungere la classe ma per le immagini)
    const img = document.createElement('img');
    img.src = src;
    //appendere l'immagine dentro all' li
    li.append(img);
    //appendere l'li dentro lo sliderWrapper (slider-wrapper dell'ex html)
    sliderWrapper.append(li);
    //appendere li al nuovo array che contiene indicazioni sulla slide active
    slideActiveElements.push(li);
    // console.log(slideActiveElements);
}

// al click dell'utente, la classe active deve passare da un'immagine all'altra

//dichiarare variabile e dargli classe 'right-arrow'
const rightArrow = document.querySelector('.right-arrow');
//creare evento
rightArrow.addEventListener('click', function() {
    // fare in modo che ad ogni click l'immagine cambi
    // dovrei riuscire a "far muovere" la classe active
    //dovrei per prima cosa RIMUOVERLA dall' elemento in cui era e AGGIUNGERLA all'elemento successivo

    let slideAttiva = slideActiveElements[currentIndex];
    slideAttiva.classList.remove('active');
    if(currentIndex !== slideActiveElements.length-1){
        let slideSuccessiva = slideActiveElements[currentIndex+1];
        slideSuccessiva.classList.add('active');
    } else {
        currentIndex = -1;
        slideActiveElements[currentIndex+1].classList.add('active');
    }

    //contatore che cresce
    currentIndex++; 

    console.log(currentIndex, slideActiveElements.length - 1);
})

//FRECCIA SX
const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', function() {
    const slideAttiva = slideActiveElements[currentIndex];
    slideAttiva.classList.remove('active');

    if(currentIndex !== 0){
        const slidePrecedente = slideActiveElements[currentIndex-1];
        slidePrecedente.classList.add('active');
    } else {
        currentIndex = slideActiveElements.length;
        slideActiveElements[slideActiveElements.length - 1].classList.add('active');
    }

    currentIndex--;
    console.log(currentIndex, slideActiveElements.length);
})
