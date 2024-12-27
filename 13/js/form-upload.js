import {isEscapeKey} from './util.js';
import {resetEffect, onEffectListChange} from './effect-image.js';
import {reset as resetPristine, isValid} from './validation-form.js';
import {scaleReset} from './scale-image.js';
import {sendData} from './api.js';
import {openMassageSuccess, openMassageError, isUpperOpenModal} from './massage.js';
import {SUBMIT_BUTTON_TEXT} from './constants.js';
import {uploadPreview} from './preview.js';

const formUpload = document.querySelector('.img-upload__form');
const editorForm = formUpload.querySelector('.img-upload__overlay');
const body = document.body;
const upload = formUpload.querySelector('.img-upload__input');
const closeUpload = editorForm.querySelector('.img-upload__cancel');
const inputContainer = editorForm.querySelector('.img-upload__text');
const effectList = document.querySelector('.effects__list');
const submitButton = editorForm.querySelector('.img-upload__submit');

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
  resetEffect();
};

function oncloseUploadClick(evt) {
  evt.preventDefault();
  closeFormCorrecting();
}

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    if (focusInput || isUpperOpenModal()) {
      evt.stopPropagation();
    } else {
      closeFormCorrecting();
    }
  }
}

const onUploadChange = () => {
  showForm();
  closeUpload.addEventListener('click', oncloseUploadClick);
  uploadPreview();
  document.addEventListener('keydown', onEscapeKeydown);
  inputContainer.addEventListener('focusin', onInputContainerFocusin);
  inputContainer.addEventListener('focusout', onInputContainerFocusout);
  effectList.addEventListener('change', onEffectListChange);
};


const blockSubmitButton = (isBlock = true) => {
  submitButton.disabled = !!isBlock;
  submitButton.textContent = isBlock ? SUBMIT_BUTTON_TEXT.SENDING : SUBMIT_BUTTON_TEXT.IDLE;
};

const onSuccessSend = () => {
  openMassageSuccess();
  closeFormCorrecting();
};

const configureFormUploadSubmit = () => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(()=> onSuccessSend())
        .catch(() => openMassageError())
        .finally(() => blockSubmitButton(false));
    }
  });
};

upload.addEventListener('change', onUploadChange);
configureFormUploadSubmit();
