const boxslider = document.querySelector('.boxslider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const box = boxslider.children;
let Index = 0;

function hid() {
prev.classList.toggle('hidden', Index === 0);
next.classList.toggle('hidden', Index === box.length - 1);
}

hid()
next.addEventListener('click', () => {
    
    Index++;
    hid()
    const boxwidth = box[0].getBoundingClientRect().width;
    boxslider.style.transform = `translateX(${-1 * boxwidth * Index}px)`;
    boxslider.style.transition = '0.4s'
});

prev.addEventListener('click', () => {
    
    Index--;
    hid()
    const boxwidth = box[0].getBoundingClientRect().width;
    boxslider.style.transform = `translateX(${-1 * boxwidth * Index}px)`;
    boxslider.style.transition = '0.4s'
});