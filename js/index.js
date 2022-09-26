// header
const header_mm = document.querySelector('.header_mainmenu');
const header_sm = document.querySelectorAll('.header_submenu');
const headerFix = document.querySelector('.header_fix');


const btn = document.querySelector('.TopBtn');

// header 서브메뉴 보이기
header_mm.addEventListener('mouseenter',(e)=>{
  headerFix.classList.add('open_wrap');
  for(var i=0; i<header_sm.length;i++){
    header_sm[i].classList.remove('hide');
  }
});
// header 서브메뉴 감추기
header_mm.addEventListener('mouseleave',(e)=>{
  headerFix.classList.remove('open_wrap');
  for(var i=0; i<header_sm.length;i++){
    header_sm[i].classList.add('hide');
  }
});

// 스크롤시 버튼 보이기
window.addEventListener('scroll',(e)=>{
  let wh = window.scrollY;
  if(wh>500){
    btn.style.display = 'block';
  }else{
    btn.style.display='none';
  }
});

btn.addEventListener('click',(e)=>{
  document.documentElement.scrollTop = 0;
});