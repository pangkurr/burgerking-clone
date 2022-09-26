const swiper = new Swiper('.mySwiper1', {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const pauseBtn= document.querySelector('.fa-pause');
const playBtn= document.querySelector('.fa-play');
pauseBtn.addEventListener('click',(e)=>{
  swiper.autoplay.stop();

  pauseBtn.classList.add('on');
  playBtn.classList.remove('on');
});

playBtn.addEventListener('click',(e)=>{
  swiper.autoplay.start();

  playBtn.classList.add('on');
  pauseBtn.classList.remove('on');
});