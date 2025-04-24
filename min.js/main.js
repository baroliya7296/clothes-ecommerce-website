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

//   const selectedImage = document.getElementById('selected-image');
//   const detailsBox = document.getElementById('image-details');

//   images.forEach(img => {
//     img.addEventListener('click', () => {
//       // Set the clicked image's src as the preview
//       selectedImage.src = img.src;
       
//       if(selectedImage.style.display === 'none' || selectedImage.style.display === '') {
//         selectedImage.style.display = 'block';
//         detailsBox.style.display = 'block'
//       } else {
//         selectedImage.style.display = 'none';
//         detailsBox.style.display = 'none'
//             }

//       // Once image is loaded, show its details
//       selectedImage.onload = () => {
//         const details = `
//           <p class="fs-4 m-0 text-secondary fw-bold">VERCO</p>
//             <p class="fs-5 m-0">Unstitched Crepe Salwar Suit Material Printed</p>
//             <p class="fw-medium text-success m-0 mt-1">Special price</p>
//             <p class="fs-3 fw-bold m-0 mt-1 mb-1" >₹279 <strike class="fs-5 fw-normal text-secondary">₹999</strike> <span class="fs-5 fw-semibold text-success" >72% Off</span> </p>
//             <p> <span class="fw-bold fs-5 m-0 mb-1 bg-success  pt-0 pb-1 ps-2 text-white rounded-5">3.9 <i class="fa-solid fa-star fs-6"></i> </span><span class="fw-semibold fs-5 text-secondary">702 ratings and 18 reviews</span></p>
//             <h4 class="m-0 mb-2 fs-5 fw-medium">Available Offers</h4>
//             <p class="mb-2"> <span class="fw-bolder">  <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
//             <p class="mb-2"><span class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> 10% off up to ₹1,000 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 and aboveT&C</p>
//             <p class="mb-2"> <span  class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</p>
//             <p class="m-0"> <span class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Combo Offer</span> Buy 2 or more items save ₹30 & ₹279T&C</p>
//             <p class="ms-4 text-info fw-semibold fs-5 m-0 mt-1">+2 more offers</p>

//             <div class="product-btn mt-4">
//                 <button class="btn btn-danger fs-5 fw-bold text-white ms-1"><i class="fa-solid fa-cart-shopping me-2"></i>ADD TO CART</button>
//                 <button class="btn btn-success fs-5 fw-bold ms-2"><i class="fa-solid fa-bag-shopping me-2"></i>BUY NOW</button>
//             </div>
//         `;
//         detailsBox.innerHTML = details;
//       };
//     });
//   });

const images1 = document.querySelectorAll('.gallery img');

  images1.forEach(img => {
    img.addEventListener('click', () => {
      // Store image src and alt in localStorage
      localStorage.setItem('selectedImageSrc', img.src);
      localStorage.setItem('selectedImageAlt', img.alt);
      // Go to new page
      window.location.href = 'details.html';
    });
  });

const img = document.getElementById('display-image');
  const details = document.getElementById('image-details');

  // Get image data from localStorage
  const src = localStorage.getItem('selectedImageSrc');
  const alt = localStorage.getItem('selectedImageAlt');

  if (src) {
    img.src = src;
    img.alt = alt || 'No alt text';

    img.onload = () => {
      details.innerHTML = `
            <p class="fs-4 m-0 text-secondary fw-bold">VERCO</p>
            <p class="fs-5 m-0">Unstitched Crepe Salwar Suit Material Printed</p>
            <p class="fw-medium text-success m-0 mt-1">Special price</p>
            <p class="fs-3 fw-bold m-0 mt-1 mb-1" >₹279 <strike class="fs-5 fw-normal text-secondary">₹999</strike> <span class="fs-5 fw-semibold text-success" >72% Off</span> </p>
            <p> <span class="fw-bold fs-5 m-0 mb-1 bg-success  pt-0 pb-1 ps-2 text-white rounded-5">3.9 <i class="fa-solid fa-star fs-6"></i> </span><span class="fw-semibold fs-5 text-secondary">702 ratings and 18 reviews</span></p>
            <h4 class="m-0 mb-2 fs-5 fw-medium">Available Offers</h4>
            <p class="mb-2"> <span class="fw-bolder">  <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
            <p class="mb-2"><span class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> 10% off up to ₹1,000 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 and aboveT&C</p>
            <p class="mb-2"> <span  class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Bank Offer</span> off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</p>
            <p class="m-0"> <span class="fw-bolder"> <i class="fa-solid fa-thumbtack text-success"></i> Combo Offer</span> Buy 2 or more items save ₹30 & ₹279T&C</p>
            <p class="ms-4 text-info fw-semibold fs-5 m-0 mt-1">+2 more offers</p>

            <div class="product-btn mt-4">
                <button class="btn btn-danger fs-5 fw-bold text-white ms-1"><i class="fa-solid fa-cart-shopping me-2"></i>ADD TO CART</button>
                <button class="btn btn-success fs-5 fw-bold ms-2"><i class="fa-solid fa-bag-shopping me-2"></i>BUY NOW</button>
            </div>
      `;
    };
  } else {
    details.textContent = 'No image data found.';
  }
 
  