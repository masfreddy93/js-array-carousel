//creare array di immagini 
const slides = [ './img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg' ];
console.log(slides);

//richiamare l'elemento slider-wrapper
const sliderWrapper = document.querySelector('.slider-wrapper');

// generare il contenuto dello slider
for(let i=0; i<slides.length; i++) {
    const src = slides[i];
    
    const li = document.createElement('li');
    li.classList.add('slide');

    if(i===0){
        li.classList.add('active');
    }
    
    const img = document.createElement('img');
    img.src = src;

    li.append(img);

    sliderWrapper.append(li);
}

