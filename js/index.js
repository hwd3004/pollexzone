// var s03_page_p = document.querySelectorAll('.s03_page_p');
// var s03_i = document.querySelectorAll('.s03_i');
// var s03_count = 0;
//
// for (var i = 0; i < s03_page_p.length; i++) {
//   s03_page_p.addEventListener("mouseover", event => show(i));
//   s03_page_p.addEventListener("mouseout", event => hide(i));
// }
//
// function show(e){
//   var num = e;
//   s03_i[num].style.display = "block";
// }
//
// function hide(e){
//   var num = e;
//   s03_i[num].style.displ = "none";
// }

var button = document.querySelector('.button');
var layer_popup = document.querySelector('.layer_popup');
var button_span = document.querySelectorAll('.button>span');

var layer_popup_count = 0;

button.addEventListener('click', show_layer_popup);

function show_layer_popup(){
  if (layer_popup_count == 0){
    layer_popup_count = 1;
    layer_popup.style.display = 'block';
  }
  else {
    layer_popup_count = 0;
    layer_popup.style.display = 'none';
  }
}

s03_i = document.querySelectorAll('.s03_i');
s03_p_button = document.querySelectorAll('.s03_p_button');

s03_img_div = document.querySelector('.s03_img_div');




// var s03_p_button_count = 0;
//
// if (s03_p_button_count == 0) {
//   s03_i[0].style.display = 'block';
// }
//
// for (var i = 0; i < s03_p_button.length; i++) {
//   s03_p_button[i].addEventListener('mouseover', function(){
//     s03_p_button_count = 1;
//     for (var j = 0; j < s03_p_button.length; j++) {
//       s03_i[j].style.display = 'none';
//     }
//
//     s03_i[i].style.display = 'block';
//   })
// }
// 실행 안됨

// for (var i = 0; i < s03_p_button.length; i++) {
//   var margin_left = 0;
//   var vw = 'vw';
//
//   s03_p_button[i].addEventListener('mouseover', function (){
//     s03_img_div.stlye.marginLeft = margin_left + vw;
//   })
//
//   margin_left = -120;
// }
// 실행 안됨


var zero = 0;

var s03_i_arr = [0, '-120vw', '-240vw'];

s03_p_button[0].addEventListener('mouseover', function(){
  s03_img_div.style.marginLeft = zero;
})

s03_p_button[1].addEventListener('mouseover', function(){
  s03_img_div.style.marginLeft = zero;
  s03_img_div.style.marginLeft = s03_i_arr[1];
})

s03_p_button[2].addEventListener('mouseover', function(){
  s03_img_div.style.marginLeft = zero;
  s03_img_div.style.marginLeft = s03_i_arr[2];
})





// css 참고 - margin_left를 -120vw, -240vw 하는 이유
// .s03_img_div img {
//   width: 120vw;
//   filter: brightness(50%);
//   transform: translateX(-10%);
// }









//
