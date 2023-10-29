  const navBtnOpen = document.querySelector('#navigation__link');
  const navBtnOpenPlus = document.querySelector('#btnbefore');
  const navBtnPlus = document.querySelector('.navigation__all-plus');
  const navOverlay = document.querySelector('#overlay');
  const margin = document.querySelector('.wrapper');

function navigationBtnAll() {
  function toggleNavAll() {
    navOverlay.classList.toggle('overlay-show');
    navBtnPlus.classList.toggle('navigation__all-plus--active');
    navBtnOpenPlus.classList.toggle('navigation__all-btnbefore--active');
    document.body.classList.toggle('noscroll');
    navBtnOpen.classList.toggle('marginr');
    margin.classList.toggle('marginr');
  };
  navBtnOpen.onclick = toggleNavAll;
  navBtnPlus.onclick = toggleNavAll;
  navOverlay.onclick = toggleNavAll;
};

// function opacityBtnAll() {
//   setInterval(() => {
//     if ($(window).scrollTop() > 70 && $(window).scrollTop() < 5000) {
//       $('.navigation__all').addClass('_active-all')
//       $('.navigation__all').addClass('navigation__all--active')
//       } else {
//       $('.navigation__all').removeClass('_active-all')
//     }
//   })
// }

// opacityBtnAll();
navigationBtnAll();
// ======================ACTIVE==========================================================

const elemFront = document.querySelector('.top--front');
const elemEnd = document.querySelector('.top--end');
const elemDev = document.querySelector('.bot--developer');
const elemAbout = document.querySelector('.bot--about');
const elemNavAll = document.querySelector('.navigation__all');
const elemFrontEndPlus = document.querySelector('._active');

function scrollBtnAll() {
  setInterval(() => {
    window.addEventListener('scroll', () => {
      if (elemNavAll && window.scrollY > 70) {
        elemNavAll.classList.add('_active-all');
        elemNavAll.classList.add('navigation__all--active');
      } else {
        elemNavAll.classList.remove('_active-all');
      }
    });
  },);
};

scrollBtnAll();

function scrollActive(param, number) {
    window.addEventListener('scroll', () => {
      if (param && window.scrollY > number) {
        param.classList.add('_active');
      }
    });
};

scrollActive(elemFront, 400);
scrollActive(elemEnd, 400);
scrollActive(elemDev, 800);

// =======================SCROLL=SMOOTH=========================================================

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// =================================================================================

// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const blockID = anchor.getAttribute('href').substring(1);
//     const targetElement = document.getElementById(blockID);
    
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// function a() {
//   setInterval(() => {
//     if ($(window).scrollTop() >= 0) {
//       $('.header_nav-logo').addClass('_active-logo')
//     } else {
//       $('.header_nav-logo').removeClass('_active-logo')
//     }
//   }, 0);
// };

// =====================CLOCK===================================
// window.onload = function() {
  //   window.setInterval(function(){
    //     let date = new Date();
    //     let hourse = date.getHours();
    //     let minutes = date.getMinutes();
    //     let seconds = date.getSeconds()
    
    //     if (hourse < 10) hourse = "0" + hourse;
    //     if (minutes < 10) minutes = "0" + minutes;
    //     if (seconds < 10) seconds = "0" + seconds;
    //     var clock = hourse + ":" + minutes + ":" + seconds;
    //     document.getElementById("clock").innerHTML = clock;
    //   }, 1000);
    // };
// =====================CLOCK===================================