const elemAnim = document.querySelectorAll('.elem-anim');

let options = {
  threshold: 0.25
}

let observer = new IntersectionObserver((entries => {
  entries.forEach(entry => {
    console.log(entry.intersectionRatio)
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