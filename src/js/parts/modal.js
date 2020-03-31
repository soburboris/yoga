

function modal() {
  document.body.addEventListener('click', function (event) {
    var overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    if (event.target && event.target.classList.contains('description-btn')) {
      overlay.style.display = 'block';
      event.target.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    } else if (event.target && event.target.classList.contains('more')) {
      overlay.style.display = 'block';
      event.target.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }

    close.addEventListener('click', function (event) {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      this.classList.remove('more-splash');
    }.bind(event.target));
  });
}

module.exports = modal;