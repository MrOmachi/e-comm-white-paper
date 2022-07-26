let hamburger = document.getElementById('hamburger');
let desktopList = document.getElementById('desktopList');
let closeX = document.getElementById('closeX');
let speaker3 = document.getElementById('speaker3');
let btn = document.getElementById('btn');

[hamburger, closeX, desktopList].forEach((elem) => {
  elem.addEventListener('click', function () {
    desktopList.classList.toggle('showUlItems');
    closeX.classList.toggle('showUlItems');
    hamburger.classList.toggle('hide');
  });
});

btn.addEventListener('click', () => {
  speaker3.classList.toggle('show');
  btn.classList.toggle('hide');
});
