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
    margin.classList.toggle('marginr');
  };
  navBtnOpen.onclick = toggleNavAll;
  navBtnPlus.onclick = toggleNavAll;
  navOverlay.onclick = toggleNavAll;
};

function opacityBtnAll() {
  setInterval(() => {
    if ($(window).scrollTop() > 70 && $(window).scrollTop() < 5000) {
      $('.navigation__all').addClass('active-all')
      $('.navigation__all').addClass('navigation__all--active')
      } else {
      $('.navigation__all').removeClass('active-all')
    }
  })
}

opacityBtnAll();
navigationBtnAll();
// ========================================================





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