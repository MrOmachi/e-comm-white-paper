const hamburger = document.getElementById('hamburger');
const desktopList = document.getElementById('desktopList');
const closeX = document.getElementById('closeX');
const speakersDiv = document.getElementById('speakersDiv');
const ulLi = document.querySelectorAll('.ulLi');
const liArr = Array.from(ulLi);

hamburger.addEventListener('click', () => {
  desktopList.classList.toggle('showUlItems');
  closeX.classList.toggle('showUlItems');
  hamburger.classList.toggle('hide');
});

closeX.addEventListener('click', () => {
  hamburger.classList.toggle('hide');
  desktopList.classList.toggle('showUlItems');
  closeX.classList.toggle('showUlItems');
});

liArr.forEach((el) => {
  el.addEventListener('click', () => {
    hamburger.classList.remove('hide');
    desktopList.classList.remove('showUlItems');
    closeX.classList.remove('showUlItems');
  });
});
