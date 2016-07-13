(function () {
  'use strict';

  var imgCat = document.querySelector('[data-img-id="1"]'),
      showCounter = document.querySelector('.show-counter'),
      h1  = document.createElement('h1'),
      counter = 0;

  h1.textContent = 0;
  showCounter.appendChild(h1);

  imgCat.addEventListener('click', function () {
    h1.textContent = counter++;
  }, false);

})();
