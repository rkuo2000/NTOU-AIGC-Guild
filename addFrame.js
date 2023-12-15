document.querySelector('img').addEventListener('click', function() {
  this.className = 'active';
  document.querySelector('iframe').src += '?autoplay=1';
});