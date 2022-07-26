let hamburger = document.getElementById('hamburger');
let desktopList = document.getElementById('desktopList');
let closeX = document.getElementById('closeX');

console.log(closeX);

[hamburger, closeX].forEach((elem) => {
  elem.addEventListener('click', function () {
    desktopList.classList.toggle('showUlItems');
    closeX.classList.toggle('showUlItems');
    hamburger.classList.toggle('hide');
  });
});
