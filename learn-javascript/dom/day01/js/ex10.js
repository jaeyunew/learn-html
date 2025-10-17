window.onload = function () {
  let button = this.document.getElementById('button');
  const text = '★';

  button.onclick = function () {
    button.innerHTML += text;
  };
};
