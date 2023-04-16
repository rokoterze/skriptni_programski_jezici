const slideContainer = document.querySelector('.slider');
const sliderText = document.querySelector('.slider--text');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');

const sliderImages = [
    {
       src: 'https://images.unsplash.com/photo-1517703806608-15ec22b3e83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
       text: 'slika_array[0]'
    },
    {
       src: 'https://images.unsplash.com/photo-1554223090-7e482851df45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80',
       text: 'slika_array[1]'
    },
    {
       src: 'https://images.unsplash.com/photo-1592199299806-e7349699f6a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
       text: 'slika_array[2]'
    },
    {
       src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1883&q=80',
       text: 'slika_array[3]'
    },
    {
       src: 'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
       text: 'slika_array[4]'
    },
];

let slideCounter = 0;

const startSlider = () => {
    slideCounter = 0;
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34,34,34,0.4),
        rgba(68,68,68,0.4)
    ),
    url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    
}

btnRight.addEventListener('click', function() {
    
    if(slideCounter === sliderImages.length-1){
        slideContainer.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34,34,34,0.4),
            rgba(68,68,68,0.4)
        ), 
        url(${sliderImages[0].src})`; 
        sliderText.innerHTML = sliderImages[0].text;

        slideCounter = -1;

        slideContainer.classList.add('fadeIn');
        setTimeout(() => {
            slideContainer.classList.remove('fadeIn');
        }, 1000);
    } 

    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34,34,34,0.4),
        rgba(68,68,68,0.4)
    ), 
    url(${sliderImages[slideCounter+1].src})`;
    sliderText.innerHTML = sliderImages[slideCounter+1].text;
    slideCounter++;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
        slideContainer.classList.remove('fadeIn');
    }, 1000);
    
});

btnLeft.addEventListener('click', function() {
 
    if(slideCounter === 0){ 
       
        slideContainer.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34,34,34,0.4),
            rgba(68,68,68,0.4)
        ),
     
        url(${sliderImages[4].src})`; 
        sliderText.innerHTML = sliderImages[sliderImages.length-1].text; 

        slideCounter = sliderImages.length-1;
        
        slideContainer.classList.add('fadeIn');
        setTimeout(() => {
            slideContainer.classList.remove('fadeIn');
        }, 1000);
    } 
    
    else{

        slideContainer.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34,34,34,0.4),
            rgba(68,68,68,0.4)
        ), 
        
        url(${sliderImages[slideCounter-1].src})`;
        sliderText.innerHTML = sliderImages[slideCounter-1].text;
    
        slideCounter--;
    
        slideContainer.classList.add('fadeIn');
        setTimeout(() => {
            slideContainer.classList.remove('fadeIn');
        }, 1000);
    }
});