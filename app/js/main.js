$(function () {

  $('.header__btn').on('click', function () {
    console.log('hui')
    $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close')
  });
})

