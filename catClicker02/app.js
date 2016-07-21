(function () {
  'use strict';

  function addCounter () {
    this.counter++;
  }

  var imagesCat = document.querySelectorAll('[data-img-id]');
  var cats = [
        {
          name: 'Jonny',
          counter: 0
        },
        {
          name: 'Alfredo',
          counter: 0
        }
      ];

  imagesCat.forEach( function (el) {
    el.addEventListener('click', function (e) {
      var imageIndex = +(el.getAttribute('data-img-id')),
          objIndex = imageIndex - 1,
          parentElement = el.parentNode,
          counterContainer = document.querySelector('[data-counter-id="'+ imageIndex +'"]');

      addCounter.call(cats[objIndex]);
      counterContainer.textContent = cats[objIndex].counter;
      parentElement.querySelector('p').textContent = cats[objIndex].name;
    });
  });

})();
