var img = document.querySelector(".grid-header-item:last-child img:nth-child(2)");
var show = document.querySelector('.show');


img.addEventListener("click" , add ,false);


function add(){
show.classList.toggle('slideDown');
show.classList.toggle('active');
show.classList.toggle('act')
}
var j = -1;
function numberNext(){


 for (var i = 0 ; i < span.length ; i++){
     if (span[i].classList.contains('number')){
       span[i].classList.remove('number');
       span[i].nextElementSibling.classList.add('number');
    }

    if(j < i)break;

  }
  j++;
 if(j % 4 == 0 && j != 0){
      span[0].classList.add('number');
      j = -1;

    }




}

var span = document.querySelectorAll('.item-content-three span');
var number = document.querySelector('.item-content-three .fa-angle-right');

number.addEventListener('click' , numberNext);

var search = document.querySelector(".search");

setInterval(function(){

  if (document.documentElement.clientWidth < 433 ){
  search.placeholder = "";
}
else{
  search.placeholder = 'search destination';
}

},40);

var scroll = document.querySelector(".scroll");

scroll.addEventListener('click' , function(){

 var time = setInterval(function (){
   scrollBy(0 , -40);
   if (pageYOffset == 0) clearInterval(time);
 },10);

});
setInterval(function(){
  if(pageYOffset > 742){
    scroll.classList.add('slideLeft');
     scroll.classList.remove('scroll-to');
  }
  else {
    scroll.classList.remove('slideLeft');
     scroll.classList.add('scroll-to');
  }
},30);
