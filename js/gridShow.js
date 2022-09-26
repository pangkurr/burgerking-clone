window.onload= function(){
  var grid = new Isotope( '.burger_item',{//배치할 요소를 감싸고 있는 부모 요소
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
//header 영역의 메뉴를 눌러도 이동하게.
var header_btns = document.querySelectorAll('.header_submenu.choice li');
  for(var i=0;i<header_btns.length;i++){
    header_btns[i].addEventListener('click',function(e){
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


// footer 영역의 메뉴란을 눌러도 이동하게
    var footer_btn = document.querySelectorAll('.footer_submenu.choice li');
    for(var i=0;i<footer_btn.length;i++){
      footer_btn[i].addEventListener('click',function(e){
        e.preventDefault();
        
        var sort = this.querySelector('a').getAttribute('href');
      
        grid.arrange({
          filter:sort,
        });
    
        for(var i=0;i<main_btns.length;i++){
          main_btns[i].classList.remove('on');
        }
        this.classList.add('on');
        document.documentElement.scrollTop = 0;
        });
      }

};