// external js: masonry.pkgd.js
let gut;
const desktop = window.matchMedia('(min-width: 1200px)')
const tablet = window.matchMedia('(min-width: 768px)')
if (desktop.matches) {
  get = 7.99;
  // console.log(get);
} else 
  
if (tablet.matches) {
  get = 6.07;
  // console.log(get);
} else get = 2.53;
console.log(get);
// jQuery(document).ready(function ($) {
$('.grid').masonry({

  itemSelector: '.grid-item',
  // horizontalOrder: false,
  // columnWidth: 138,
     gutter: get,
  stagger: 30,
     
   

  // originRight: false
  });
  // });
