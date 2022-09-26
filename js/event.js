window.onload= function(){
  var grid = new Isotope( '.event_item',{//배치할 요소를 감싸고 있는 부모 요소
    itemSelector:'.item', //배치할 요소
    columnWidth:'.item', //너비를 구할 요소
    transitionDuration:'0.4s' //화면 재배치시 요소가 움직이는 속도
  });


  // menulist를 버튼으로 활용
  var main_btns = document.querySelectorAll('main ul li');
  for(var i=0;i<main_btns.length;i++){
    main_btns[i].addEventListener('click',function(e){
    e.preventDefault();
    
    var sort = this.querySelector('a').getAttribute('href');
  
    grid.arrange({
      filter:sort,
    });

    for(var i=0;i<main_btns.length;i++){
      main_btns[i].classList.remove('on');
    }
    this.classList.add('on');
  });
}
};