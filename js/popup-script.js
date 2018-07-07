var popup = document.querySelector('.popup');
var buttonOpenedPopup = document.querySelector('.contacts__button');
var buttonClosedPopup = popup.querySelector('.popup__button-close');

var form = popup.querySelector('.popup__form');
var inputForm = form.querySelectorAll('.popup__input');
var inputEnterName = form.querySelector('[name=my-name]');
var inputEnterEmail = form.querySelector('[name=email]');
var inputEnterComment = form.querySelector('[name=comment]');

var isStorageSupport = true;
var storageSelf = '';
var storagePost = '';

try {
  storageSelf = localStorage.getItem('self');
  storagePost = localStorage.getItem('post');
} catch (err) {
  isStorageSupport = false;
}

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('popup--show')) {
      closePopup();
    }
  }
};

var onPopupButtonOpened = function (evt) {
  evt.preventDefault();
  openPopup();
};

var onPopupButtonClosed = function (evt) {
  evt.preventDefault();
  closePopup();
};

var openPopup = function () {
  popup.classList.add('popup--show');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  popup.classList.remove('popup--show');
  popup.classList.remove('popup--error');
  inputForm.classList.remove('popup__input--error');
  document.removeEventListener('keydown', onPopupEscPress);
};


buttonOpenedPopup.addEventListener('click', onPopupButtonOpened);

buttonClosedPopup.addEventListener('click', onPopupButtonClosed);

buttonClosedPopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    onPopupButtonClosed();
  }
});

buttonOpenedPopup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    onPopupButtonOpened();
  }
});

form.addEventListener('submit', function (evt) {

  if (!inputEnterName.value) {
    evt.preventDefault();
    inputEnterName.classList.add('popup__input--error');
  } else {
    inputEnterName.classList.remove('popup__input--error');
  }

  if (!inputEnterEmail.value) {
    evt.preventDefault();
    inputEnterEmail.classList.add('popup__input--error');
  } else {
    inputEnterEmail.classList.remove('popup__input--error');
  }

  if (!inputEnterComment.value && inputEnterComment.value !== ('В свободной форме')) {
    evt.preventDefault();
    inputEnterComment.classList.add('popup__input--error');
  } else {
    inputEnterComment.classList.remove('popup__input--error');
  }

  if (!inputEnterName.value || !inputEnterEmail.value || !inputEnterComment.value && inputEnterComment.value !== ('В свободной форме')) {
    evt.preventDefault();
    console.log(' Заполните все поля формы перед отправкой!');
    popup.classList.remove('popup--error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('popup--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('self', inputEnterName.value);
      localStorage.setItem('post', inputEnterEmail.value);
    }
  }
});
