import {isEscapeKey} from './util.js';
import {onFormUploadSubmit} from './validation-form.js';

const formUpload = document.querySelector('.img-upload__form');
const formCorrecting = formUpload.querySelector('.img-upload__overlay');
const body = document.body;
const upload = formUpload.querySelector('.img-upload__input');
const closeUpload = formCorrecting.querySelector('.img-upload__cancel');
const inputContainer = formCorrecting.querySelector('.img-upload__text');
let focusInput;

const showForm = () => {
  formCorrecting.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideForm = () => {
  formCorrecting.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onInputContainerFocusin = () => {
  focusInput = true;
  return focusInput;
};

const onInputContainerFocusout = () => {
  focusInput = false;
  return focusInput;
};

const closeFormCorrecting = () => {
  hideForm();
  formUpload.reset();
  closeUpload.removeEventListener('click', oncloseUploadClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  formUpload.removeEventListener('submit', onFormUploadSubmit);
  inputContainer.removeEventListener('focusin', onInputContainerFocusin);
  inputContainer.removeEventListener('focusout', onInputContainerFocusout);
};

function oncloseUploadClick(evt) {
  evt.preventDefault();
  closeFormCorrecting();
}

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    if (focusInput) {
      evt.stopPropagation();
    } else {
      closeFormCorrecting();
    }
  }
}

const onUploadChange = () => {
  showForm();
  closeUpload.addEventListener('click', oncloseUploadClick);
  document.addEventListener('keydown', onEscapeKeydown);
  formUpload.addEventListener('submit', onFormUploadSubmit);
  inputContainer.addEventListener('focusin', onInputContainerFocusin);
  inputContainer.addEventListener('focusout', onInputContainerFocusout);
};

upload.addEventListener('change', onUploadChange);


