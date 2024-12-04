import {isEscapeKey} from './util.js';
import {resetEffect, onEffectListChange} from './effect-image.js';
import {reset as resetPristine} from './validation-form.js';
import {scaleReset} from './scale-image.js';

const formUpload = document.querySelector('.img-upload__form');
const editorForm = formUpload.querySelector('.img-upload__overlay');
const body = document.body;
const upload = formUpload.querySelector('.img-upload__input');
const closeUpload = editorForm.querySelector('.img-upload__cancel');
const inputContainer = editorForm.querySelector('.img-upload__text');
const effectList = document.querySelector('.effects__list');

let focusInput;

const showForm = () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideForm = () => {
  editorForm.classList.add('hidden');
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
  closeUpload.removeEventListener('click', oncloseUploadClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  inputContainer.removeEventListener('focusin', onInputContainerFocusin);
  inputContainer.removeEventListener('focusout', onInputContainerFocusout);
  resetPristine();
  formUpload.reset();
  scaleReset();
  effectList.removeEventListener('change', onEffectListChange);
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
  inputContainer.addEventListener('focusin', onInputContainerFocusin);
  inputContainer.addEventListener('focusout', onInputContainerFocusout);
  effectList.addEventListener('change', onEffectListChange);
  resetEffect();
};

upload.addEventListener('change', onUploadChange);


