window.onload = function () {
  var checks = document.querySelectorAll('.check');
  for (var i = 0; i < checks.length; i++) {
    checks[i].addEventListener('click', function () {
      this.style.color = '#ccc';
      this.parentNode.style.color = '#ccc';
      this.parentNode.style.textDecoration = 'line-through';
    });
  }
};
