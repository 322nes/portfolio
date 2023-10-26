// function mobileNav() {
//   const navBtnOpen = document.querySelector('#mobileOpen');
//   const navBtnClose = document.querySelector('#mobileClose');
//   const navOverlay = document.querySelector('#mobileOverlay');
//   const nav = document.querySelector('#mobileNav');

//   function toggleMobileNav() {
//     navOverlay.classList.toggle('mobile-nav-overlay--show');
//     nav.classList.toggle('mobile-nav--show');
//     document.body.classList.toggle('noscroll');
//   };

//   navBtnOpen.onclick = toggleMobileNav;
//   navBtnClose.onclick = toggleMobileNav;
//   navOverlay.onclick = toggleMobileNav;
// };

// function loader() {
//   const loader = document.querySelector('#loader');

//   window.addEventListener('load', () => {
//     setTimeout(() => {
//       loader.classList.add('preloader-hidden');
//     }, 1000)
//   });
// };

// loader();
// mobileNav();


function a() {
  setInterval(() => {
    if ($(window).scrollTop() > 930) {
      $('.header_nav-logo').addClass('_active-logo')
    } else {
      $('.header_nav-logo').removeClass('_active-logo')
    }
  }, 0);
};

function b() {

  setInterval(() => {
    if ($(window).scrollTop() > 70 && $(window).scrollTop() < 5000) {
      $('.header_main-img-all').addClass('_active-all')
      $('.header_main-img-all').addClass('header_main-img-all-active')
    } else {
      $('.header_main-img-all').removeClass('_active-all')
      $('.header_main-all-acc').removeClass('header_main-all-acc-active')
      $('.main-img-all-svg').removeClass('main-img-all-svg-active')
    }

  })
}

a();
b();
// ========================================================

$('.header_main-all-link, .overlay').on('click', function (e) {
  e.preventDefault();
  $('.header_main-all-acc').toggleClass('header_main-all-acc-active')
  $('.main-img-all-svg').toggleClass('main-img-all-svg-active')
  $('.overlay').toggleClass('overlay-show')
})

// $('.header_main-all-link, .overlay').on('click', function (e) {

// });

// ========================================================


window.onload = function() {
  window.setInterval(function(){
    let date = new Date();
    let hourse = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()

    if (hourse < 10) hourse = "0" + hourse;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    var clock = hourse + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = clock;
  }, 1000);
};


// const allItem = document.querySelector('activeitem');
// ('.header_main-all-link').onclick = function () {
//   if ('.header_main-all-acc')hasclass('header_main-all-acc-active');
//     {
//     ('.main-img-all-svg').addClass('main-img-all-svg-active')
//     }

// }

// if ($('.header_main-all-acc'))hasclass('header_main-all-acc-active'); {
//   $('.main-img-all-svg').addClass('main-img-all-svg-active')
// } else if () {
//   $('.main-img-all-svg').removeClass('main-img-all-svg-active')
// }


// $('.header_main-all-link').on('click', function () {
//   if ($('.header_main-img-all').addClass('_active-all'),
//     $('.header_main-img-all').addClass('header_main-img-all-active')) {
//     $('.header_main-img-all').removeClass('_active-all')
//     $('.header_main-all-acc').removeClass('header_main-all-acc-active')
//     $('.main-img-all-svg').removeClass('main-img-all-svg-active')
//   } else {
//     $('.main-img-all-svg').removeClass('main-img-all-svg-active')
//   }
// })




// $('.header_main-all-link').on('click', function (e) {
//   e.preventDefault()
// })

// $('.header_main-all-link').on('click', function (e) {
//   $('.header_main-all-acc').toggleClass('header_main-all-acc-active')
//   $('.main-img-all-svg').addClass('main-img-all-svg-active')
// })
// ========================
// if ($('.header_main-all-link').on('click', function (e) {
//   $('.header_main-all-acc').addClass('header_main-all-acc-active')
// } else {

//   }
// })

// );


// const itemActiv = document.querySelectorAll('._item-activ');

//   if ((itemActiv).click(this)) {
//     $('.header_main-img-all').addClass('_active-all')
//   }

// $('.header_main-all-link').on('click', function (e) {
//   e.preventDefault()
//   if ($('.header_main-all-acc').on('click', function (e) {
//     $(this).toggleClass('header_main-all-acc-active')
//   })
//   )}

// $('.header_main-all-link').on('click', function (e) {
//   e.preventDefault()
//   if ($(this).hasClass('header_main-all-acc')) {
//     // $(this).removeClass('main_vopros-acc-link-active')
//     $(this).children('.header_main-all-acc-active').slideUp()
//   } else {
//     $('.header_main-all-acc-active').removeClass('header_main-all-acc-active')
//     $('.header_main-all-acc').slideUp()
//     $(this).addClass('header_main-all-acc-active')
//     $(this).children('.header_main-all-acc').slideDown()
//   }
// })



// $('.header_main-all-acc').on('click', function (e) {
//   ($('.header_main-all-acc-active').on('click', function (e) {
//     $(this).toggleClass('header_main-all-acc-active');
//   })
//   )
// }
// )


// if ('.header_main-all').on('click', function (e) {
//   e.preventDefault()
//   if ($(this).toggleClass('header_main-all-acc-active')) {
//     $(this).children('.header_main-all-acc').slideToggle()
//   } else {
//     // $(this).removeClass('header_main-all-acc')
//   }
// })


  // $('.header_main-img-all').on('click', function (e) {
  //   e.preventDefault()
  //   if ($(this).hasClass('header_main-img-all')) {
  //     $(this).addClass('header_main-all-acc-active')
  //     // $(this).removeClass('main_vopros-acc-link-active')
  //     // $(this).children('.header_main-all-acc-active').slideUp()
  //   } else {
  //     // $('.header_main-all').removeClass('header_main-all-acc-active')
  //     // $('.header_main-all').slideUp()
  //     // $(this).addClass('header_main-img-all')
  //     // $(this).children('.header_main-all-acc-active').slideDown()
  //   }
  // })
  // $('.main_vopros-acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   if ($(this).hasClass('main_vopros-acc-link-active')) {
  //     $(this).removeClass('main_vopros-acc-link-active')
  //     $(this).children('.main_vopros-acc-text').slideUp()
  //   } else {
  //     $('.main_vopros-acc-link').removeClass('main_vopros-acc-link-active')
  //     $('.main_vopros-acc-text').slideUp()
  //     $(this).addClass('main_vopros-acc-link-active')
  //     $(this).children('.main_vopros-acc-text').slideDown()
  //   }
  // })









  // // ====================BURGER========================
  // setInterval(() => {
  //   if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top-open') === false) {
  //     $('.burger-following1').removeClass('burger-following')
  //     $('.burger').addClass('burger-follow')
  //     $('.burger-following1').addClass('burger')
  //   } else {
  //     if ($('.header__top').hasClass('header__top-open')) {
  //       $('.burger-following1').removeClass('burger-follow')
  //       $('.burger-following1').removeClass('burger')
  //       $('.burger-following1').addClass('burger-following')
  //     } else {
  //       if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top-open')) {
  //         $('.burger-following1').removeClass('burger-following')
  //         $('.burger').removeClass('burger-follow')

  //       } else {
  //         $('.burger-following1').removeClass('burger-following')
  //         $('.burger-following1').addClass('burger')
  //         $('.burger').removeClass('burger-follow')
  //       }
  //     }
  //   }
  // }, 0);


  // $('.burger, .overlay, .header__top a').on('click', function (e) {
  //   e.preventDefault()
  //   $('.header__top').toggleClass('header__top-open')
  //   $('.overlay').toggleClass('overlay-show')
  // })


