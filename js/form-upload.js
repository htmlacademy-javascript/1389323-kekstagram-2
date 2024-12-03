import {isEscapeKey} from './util.js';
import {resetEffect, onEffectListChange, effectList} from './effect-image.js';
import {onFormUploadSubmit, pristine} from './validation-form.js';
import {onScaleSmallerClick, onScaleBiggerClick, changeScale, SCALE_VALUE_DEFAULT} from './scale-image.js';

const formUpload = document.querySelector('.img-upload__form');
const formCorrecting = formUpload.querySelector('.img-upload__overlay');
const body = document.body;
const upload = formUpload.querySelector('.img-upload__input');
const closeUpload = formCorrecting.querySelector('.img-upload__cancel');
const inputContainer = formCorrecting.querySelector('.img-upload__text');
const scaleSmaller = formCorrecting.querySelector('.scale__control--smaller');
const scaleBigger = formCorrecting.querySelector('.scale__control--bigger');


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
  closeUpload.removeEventListener('click', oncloseUploadClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  formUpload.removeEventListener('submit', onFormUploadSubmit);
  inputContainer.removeEventListener('focusin', onInputContainerFocusin);
  inputContainer.removeEventListener('focusout', onInputContainerFocusout);
  pristine.reset();
  scaleSmaller.removeEventListener('click', onScaleSmallerClick);
  scaleBigger.removeEventListener('click', onScaleBiggerClick);
  formUpload.reset();
  changeScale(SCALE_VALUE_DEFAULT);
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
  formUpload.addEventListener('submit', onFormUploadSubmit);
  scaleSmaller.addEventListener('click', onScaleSmallerClick);
  scaleBigger.addEventListener('click', onScaleBiggerClick);
  resetEffect('origin');
  effectList.addEventListener('change', onEffectListChange);
};

upload.addEventListener('change', onUploadChange);


