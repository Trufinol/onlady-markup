
window.onload = function () {

  var fullScreenSwiper = new Swiper('.wide-swiper', {
        pagination: '.wide-swiper__pagination',
        paginationClickable: true,

    });

  var bagsSwiper = new Swiper('.b-swiper', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    nextButton: '.b-swiper__next',
    prevButton: '.b-swiper__prev',
    pagination: '.b-swiper__pagination'
});

};
