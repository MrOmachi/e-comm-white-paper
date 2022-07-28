const hamburger = document.getElementById('hamburger');
const desktopList = document.getElementById('desktopList');
const closeX = document.getElementById('closeX');
const speakersDiv = document.getElementById('speakersDiv');
const speakersArr = [
  {
    id: 1,
    image: '../img/person1.jpg',
    speakerName: 'Paul Godson',
    aboutSpeaker: 'digital marketing expert',
    speakerqualif:
      'Paul Godson studies e-commerce from Opago Int. elite space and has 10years experience.',
  },
  {
    id: 2,
    image: '../img/person4.jpg',
    speakerName: 'Samuel Agene',
    aboutSpeaker: 'e-commerce lord with Misoff wellness',
    speakerqualif:
      'Speaker studies e-commerce from misoff wellness and an authority in the field of high ticket e-goods',
  },
  {
    id: 3,
    image: '../img/person3.jpg',
    speakerName: 'Nurudeen Salifu',
    aboutSpeaker: 'A graduate of Noors ecom space',
    speakerqualif:
      'Speaker has 18yaers experience in ecommerce with four awards from four different e-com academies',
  },
  {
    id: 4,
    image: '../img/person3.jpg',
    speakerName: 'Nurudeen Salifu',
    aboutSpeaker: 'A graduate of Noors ecom space',
    speakerqualif:
      'Speaker has 18yaers experience in ecommerce with four awards from four different e-com academies',
  },
  {
    id: 5,
    image: '../img/person3.jpg',
    speakerName: 'Nurudeen Salifu',
    aboutSpeaker: 'A graduate of Noors ecom space',
    speakerqualif:
      'Speaker has 18yaers experience in ecommerce with four awards from four different e-com academies',
  },
  {
    id: 6,
    image: '../img/person3.jpg',
    speakerName: 'Nurudeen Salifu',
    aboutSpeaker: 'A graduate of Noors ecom space',
    speakerqualif:
      'Speaker has 18yaers experience in ecommerce with four awards from four different e-com academies',
  },
];
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

let data;
function speakers() {
  data = `<div class="d-md-flex flex-wrap gap-4">
  <div class="allSpeakers my-4 col-md-5">
    <div class="d-flex speaker1">
      <img src="${speakersArr[0].image}" alt="first Speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[0].speakerName}</h4>
        <p><i class="text-danger">${speakersArr[0].aboutSpeaker}</i></p>
        <p>
        ${speakersArr[0].speakerqualif}
        </p>
      </div>
    </div>
  </div>
  
  <div class="allSpeakers my-4 col-md-5">
    <div class="d-flex speaker1">
      <img src="${speakersArr[1].image}" alt="second Speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[1].speakerName}</h4>
        <p>
          <i class="text-danger"
            >${speakersArr[1].aboutSpeaker}</i
          >
        </p>
        <p>${speakersArr[0].speakerqualif}
        </p>
      </div>
    </div>
  </div>
  
  <div class="allSpeakers my-4 col-md-5">
    <div id="speaker3" class="d-flex speaker1 ">
      <img src="${speakersArr[2].image}" alt="third speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[2].speakerName}</h4>
        <p>
          <i class="text-danger">${speakersArr[2].aboutSpeaker}</i>
        </p>${speakersArr[2].speakerqualif}<p>
          
        </p>
      </div>
    </div>
  </div>

  <div class="allSpeakers my-4 col-md-5">
    <div id="speaker3" class="d-flex speaker1 ">
      <img src="${speakersArr[3].image}" alt="third speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[3].speakerName}</h4>
        <p>
          <i class="text-danger">${speakersArr[2].aboutSpeaker}</i>
        </p>${speakersArr[3].speakerqualif}<p>
          
        </p>
      </div>
    </div>
  </div>

  <div class="allSpeakers my-4 col-md-5">
    <div id="speaker3" class="d-flex speaker1 ">
      <img src="${speakersArr[4].image}" alt="third speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[4].speakerName}</h4>
        <p>
          <i class="text-danger">${speakersArr[2].aboutSpeaker}</i>
        </p>${speakersArr[4].speakerqualif}<p>
          
        </p>
      </div>
    </div>
  </div>

  <div class="allSpeakers my-4 col-md-5">
    <div id="speaker6" class="d-flex speaker1 ">
      <img src="${speakersArr[5].image}" alt="third speaker" />
      <div class="personName ms-3">
        <h4>${speakersArr[5].speakerName}</h4>
        <p>
          <i class="text-danger">${speakersArr[2].aboutSpeaker}</i>
        </p>${speakersArr[5].speakerqualif}<p>
          
        </p>
      </div>
    </div>
  </div>
  </div>

  
  
  <button id="btn" class="w-100 my-5 p-4 d-md-none">SHOW MORE</button>`;
  speakersDiv.innerHTML = data;

  const btn = document.getElementById('btn');
  const speaker6 = document.getElementById('speaker6');

  btn.addEventListener('click', () => {
    speaker6.classList.toggle('show');
    if (btn.innerHTML === 'SHOW MORE') {
      btn.innerHTML = 'SHOW LESS';
    } else if (btn.innerHTML === 'SHOW LESS') {
      btn.innerHTML = 'SHOW MORE';
    }
  });
}
speakers();
