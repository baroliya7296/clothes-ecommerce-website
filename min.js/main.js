$(document).ready(function(){
  $(".vectore-img").cycle("turnLeft");
})


$(function () {
  let currentIndex = 0;
  const slides = $('.slide');
  const dots = $('.dot');
  const slideCount = slides.length;
  let interval;

  function goToSlide(index) {
    $('.slides').css('transform', `translateX(${-300 * index}px)`);
    dots.removeClass('active').eq(index).addClass('active');
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slideCount;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(prevIndex);
  }

  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);

  dots.click(function () {
    let index = $(this).data('index');
    goToSlide(index);
  });

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  $('.slider').hover(stopAutoSlide, startAutoSlide);

  startAutoSlide();
});


function toggleProduct() {
  const product = document.getElementById('product-img');
  const button = document.querySelector('toggleButton');
  
  if (product.style.display === 'none' || product.style.display === '') {
    product.style.display = 'grid';
    toggleButton.textContent = 'Hide Product...';
  } else {
    product.style.display = 'none';
    toggleButton.textContent = 'Show Product...';
  }
}


