$('document').ready(function(){

$('.backed__slider').slick({
 arrows: true,
 dots: false,
 slidesToShow: 5,
 slidesToScroll: 1,
 prevArrow:'<svg class="slick-prev" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.8106 8.62521H4.32406L11.1008 1.93617L9.64118 0.469727L1.90009 8.11066L0.414421 9.57711L1.90009 11.0178L9.64118 18.6588L11.1008 17.1923L4.50651 10.6834H24.8106V8.62521Z" fill="#214E41"/> </svg>',
 nextArrow:'<svg class="slick-next" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.414429 10.5033H20.901L14.1242 17.1923L15.6099 18.6588L23.3249 11.0178H23.351L24.8106 9.57711L23.351 8.11066H23.3249L15.6099 0.469727L14.1242 1.93617L20.7446 8.44512H0.414429V10.5033Z" fill="#214E41"/> </svg>',
 

 responsive:[
  {
  breakpoint: 1024,
   settings: {
   slidesToShow: 4
  } 
 },
 { 
  breakpoint: 768,
  settings: {
  slidesToShow: 3
 }
},
{ 
 breakpoint: 520,
 settings: {
 slidesToShow: 2,
 arrows: false,
}
},
]
})

$('.menu__button').on('click',function(){
 $('.main__menu-list').toggleClass('main__menu-list--active'),
 $('.login__list').toggleClass('main__menu-list--active')
});

});
