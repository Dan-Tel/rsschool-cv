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