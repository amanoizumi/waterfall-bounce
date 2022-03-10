
window.onload = function() {
  const grid = document.querySelector('.grid');

  const box = document.querySelectorAll('.box');
  const imgArr = document.querySelectorAll('.box img');
  const len = imgArr.length;
  let imgShow = null;
  
  const msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  
  
  
  imagesLoaded( grid ).on( 'progress', () => {
    msnry.layout();
    imgAnimation();
  });
  

  
  let i = 0;
  const imgAnimation = () => {
    if (i < len && i > 0) {
  
      box[i-1].classList.remove('hidden');
      box[i-1].classList.add('bounceIn');
    }
  }

  const count = () => {
    imgShow = setInterval(() => {
      i++
      imgAnimation();
      if (i === 11) {
        clearInterval(imgShow);
      }
    }, 300);
  }

  count();
}

