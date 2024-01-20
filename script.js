gsap.to('#pintukiri', {
    scrollTrigger: {
        scrub: 2.5
    },
    x: -400,
})
gsap.to('#kainkiri', {
    scrollTrigger: {
        scrub: 2.5
    },
    x: -400,
})
gsap.to('#pintukanan', {
    scrollTrigger: {
        scrub: 2.5
    },
    x: 400,
})
gsap.to('#kainkanan', {
    scrollTrigger: {
        scrub: 2.5
    },
    x: 400,
})

gsap.from('.logo img', 2, {
    y : -100,
    opacity: 0,
    stagger: .2
})
gsap.from('#title-1', 2, {
    x : -100,
    opacity: 0,
    stagger: .2
})
gsap.from('#title-2', 1, {
    y : 100,
    opacity: 0,
    stagger: .2
})
gsap.from('#deskripsi', 2, {
    y : 100,
    opacity: 0,
    stagger: .2
})
gsap.from('#btn', 2, {
    y : 100,
    opacity: 0,
    stagger: .2
})
gsap.from('#title-detail', 2, {
    y : 100,
    opacity: 0,
    stagger: .2
})
gsap.from('#deskripsi-detail', 3, {
    y : 100,
    opacity: 0,
    stagger: .2
})
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "silver";
let animationEnd = true;

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');


    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const menuIcon = document.getElementById("icon");
  const listMenu = document.getElementById("list-menu");

  menuIcon.addEventListener("click", () => {
    listMenu.classList.toggle("hidden");
  });
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
  });