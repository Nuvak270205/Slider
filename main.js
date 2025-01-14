let count = 0; 
const items = document.querySelector('.slider__list'); 
const imgs = document.querySelectorAll('.slider__list img'); 
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const ds = document.querySelectorAll('.slider__ds__item'); 
const size = imgs[0].clientWidth;

let clear = setInterval(slide, 4000);

function slide() {
    count++; 
    if (count == imgs.length) {
        count = 0;
        items.style.transform = `translateX(0px)`;
        ds[imgs.length - 1].classList.remove('active'); 
        ds[count].classList.add('active'); 
    } else {
        items.style.transform = `translateX(${-size * count}px)`;
        ds[count - 1].classList.remove('active'); 
        ds[count].classList.add('active');
    }
}

right.addEventListener('click', function(){
    clearInterval(clear);
    slide();
    clear = setInterval(slide, 4000); 
});

left.addEventListener('click', () => {
    clearInterval(clear);
    count--; 
    if (count < 0) {
        count = imgs.length - 1; 
        items.style.transform = `translateX(${-size * count}px)`;
        ds[0].classList.remove('active');
        ds[count].classList.add('active');
    } else {
        items.style.transform = `translateX(${-size * count}px)`;
        ds[count + 1].classList.remove('active');
        ds[count].classList.add('active');
    }
    clear = setInterval(slide, 4000);
});
