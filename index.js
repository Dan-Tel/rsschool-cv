console.log(`
Самооценка: 
 
1. Вёрстка валидная "Document checking completed. No errors or warnings to show." +10 
2. Вёрстка семантическая (header, footer, main, nav, section, h1-h4, aside) +20
3. Для оформления СV используются css-стили +10 
4. Контент блоке по центру +10 
5. Вёрстка адаптивная +10
6. Адаптивное бургер меню, плавная прокрутка по якорям +10
7. На странице СV есть аватарка +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты, о себе, навыки, образовании и уровне английского +10
10. CV содержит пример кода +10
11. CV содержит изображения-ссылки на выполненные проекты
12. CV выполнено на английском языке +10
13. Выполнены требования к Pull Request,  выполнена самооценка +10
14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10
`)

const elemAnim = document.querySelectorAll('.elem-anim');

let options = {
  threshold: 0.25
}

let observer = new IntersectionObserver((entries => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.classList.add('animate');
    }
  })
}), options);

elemAnim.forEach(elem => {
  observer.observe(elem);
})



const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

const sliderBg = document.querySelector('.slider-bg');

const slides = document.querySelectorAll('.projects');
let index = 0;

let canChange = true;

rightBtn.addEventListener('click', () => {
  if(canChange) {
    canChange = false;

    sliderBg.classList.add('show');

    setTimeout(() => {
      slides[index].classList.remove('active');
      index++;
      if(index == slides.length) {
        index = 0;
      }
      slides[index].classList.add('active');
    }, 1000)

    setTimeout(() => {
      sliderBg.classList.remove('show');
      canChange = true;
    }, 1500)
  }
})

leftBtn.addEventListener('click', () => {
  if(canChange) {
    canChange = false;

    sliderBg.classList.add('show');

    setTimeout(() => {
      slides[index].classList.remove('active');
      index--;
      if(index == -1) {
        index = slides.length - 1;
      }
      slides[index].classList.add('active');
    }, 1000)

    setTimeout(() => {
      sliderBg.classList.remove('show');
      canChange = true;
    }, 1500)
  }
})


const projInfo = document.querySelectorAll('.project-info');
const images = document.querySelectorAll('.project-wrapper img');

projInfo.forEach(info => {
  info.addEventListener('mouseover', () => {
    images.forEach((img) => {
      img.style.filter = 'blur(10px)';
    })
  })

  info.addEventListener('mouseout', () => {
    images.forEach((img) => {
      img.style.filter = 'blur(0px)';
    })
  })
})


const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  if(!menu.classList.contains('show')) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }

  menuBtn.classList.toggle('is-active');
})

const anchorBtns = document.querySelectorAll('.menu a');

anchorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menu.classList.remove('show');
    menuBtn.classList.toggle('is-active');
  })
})