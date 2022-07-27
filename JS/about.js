const hamburger = document.getElementById('hamburger');
const desktopList = document.getElementById('desktopList');
const closeX = document.getElementById('closeX');

[hamburger, closeX, desktopList].forEach((elem) => {
  elem.addEventListener('click', () => {
    desktopList.classList.toggle('showUlItems');
    closeX.classList.toggle('showUlItems');
    hamburger.classList.toggle('hide');
  });
});
