

function slider() {
  var sliderIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWarp = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(1);
  autoSlides();
  document.body.addEventListener('mouseover', function (event) {
    if (event.target && event.target.tagName == 'IMG') {
      prev.style.display = '';
      next.style.display = '';
    }
  });

  function autoSlides() {
    setInterval(function () {
      showSlides(sliderIndex);
      sliderIndex++;
      prev.style.display = 'none';
      next.style.display = 'none';
    }, 6000);
  }

  function showSlides(n) {
    if (n > slides.length) {
      sliderIndex = 1;
    }

    if (n < 1) {
      sliderIndex = slides.length;
    }

    slides.forEach(function (item) {
      item.style.display = 'none';
    });
    dots.forEach(function (item) {
      item.classList.remove('dot-active');
    });
    slides[sliderIndex - 1].style.display = '';
    dots[sliderIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(sliderIndex += n);
  }

  function currentSlides(n) {
    showSlides(sliderIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWarp.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target == dots[i - 1] && event.target.classList.contains('dot')) {
        currentSlides(i);
      }
    }
  });
}

module.exports = slider;