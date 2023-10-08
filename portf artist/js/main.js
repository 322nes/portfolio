$('.href-i, .href-e').on('click', function (e) {
  e.preventDefault()
})

// $('.href-i').on('click', function (e) {
//   $('.portfolio_item-show').toggleClass('portfolio_item-showi')
// })
// $('.href-e').on('click', function (e) {
//   $('.portfolio_item-show').removeClass('portfolio_item-showi')
// })

$('.href-i').on('click', function (e) {
  // $(this).removeClass('portfolio_item-hover')
  // $(this).children('.portfolio_item')
  $('.portfolio_item-show').toggleClass('portfolio_item-showi')
})
$('.href-e').on('click', function (e) {
  $('.portfolio_item-show').removeClass('portfolio_item-showi')
})

// ==========================WHITE=====================================================

$('.nav-item-white-btn').on('click', function (e) {
  e.preventDefault()
  $('.body').toggleClass('body-white')
  $('.header-wrapper').toggleClass('header-wrapper-white')
  $('.header_bot-logo').toggleClass('header_bot-logo-white')
  $('.nav-item-lng').toggleClass('nav-item-lng-white')
  $('.nav-item-white-btn').toggleClass('nav-item-white-btn-white')
  $('.main_top-mp').toggleClass('main_top-mp-white')
  $('.bot-button').toggleClass('bot-button-white')
  $('.main_top-am').toggleClass('main_top-am-white')
  $('.main_bot-text').toggleClass('main_bot-text-white')
  $('.befa').toggleClass('befa-white')
  $('.footer').toggleClass('footer-white')
})


// ==========================BUTTON=====================================================

$('.bot-btn').on('click', function (e) {
  e.preventDefault()
  $('.btn-hide').toggleClass('btn-hide-show')
  $('.btn-load').toggleClass('btn-load-show')
  $('.portfolio_item-acc').toggleClass('portfolio-acc').slideToggle();
})







// =======================================================================================
// $('.hrefi, .hrefe').on('click', function (e) {
  //   e.preventDefault()
  // })
  
  // $('.href-i').on('click', function (e) {
    //   $('.portfolio_item').removeClass('portfolio_item-hover')
    //   $('.portfolio_item-show').toggleClass('portfolio_item-showi')
    // })
    // $('.href-e').on('click', function (e) {
      //   $('.portfolio_item-show').removeClass('portfolio_item-showi')
// })

// 15335135


// $('.bot-btn').on('click', function (e) {
//   e.preventDefault()
//   $('.btn-hide').toggleClass('btn-hide-show')
//   $('.btn-load').toggleClass('btn-load-show')
//   $('.portfolio_item-acc').removeClass('portfolio-acc').slideToggle();
// })
// 21212


// $('.href-i, .href-e').on('click', function (e) {
//   e.preventDefault()
// })

// $('.href-i').on('click', function (e) {
//   // $(e.target).parent('.portfolio_item').find('.portfolio_item')
//   // $('.portfolio_item').removeClass('portfolio_item-hover')
//   $('.portfolio_item-show').toggleClass('portfolio_item-showi')
// })
// $('.href-e').on('click', function (e) {
//   $('.portfolio_item-show').removeClass('portfolio_item-showi')
// })