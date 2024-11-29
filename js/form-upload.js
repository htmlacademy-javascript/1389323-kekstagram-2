import {isEscapeKey} from './util.js';
import {onFormUploadSubmit} from './validation-form.js';

const formUpload = document.querySelector('.img-upload__form');
const formCorrecting = formUpload.querySelector('.img-upload__overlay');
const body = document.body;
const upload = formUpload.querySelector('.img-upload__input');
const closeUpload = formCorrecting.querySelector('.img-upload__cancel');
const inputForms = formCorrecting.querySelectorAll('.img-upload__field-wrapper *');
let focusInput;

const showForm = () => {
  formCorrecting.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideForm = () => {
  formCorrecting.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onInputFormFocus = () => {
  focusInput = true;
  return focusInput;
};

const onInputFormBlur = () => {
  focusInput = false;
  return focusInput;
};

const closeFormCorrecting = () => {
  hideForm();
  formUpload.reset();
  closeUpload.removeEventListener('click', oncloseUploadClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  formUpload.removeEventListener('submit', onFormUploadSubmit);

  inputForms.forEach((inputForm)=> {
    inputForm.removeEventListener('focus', onInputFormFocus);
    inputForm.removeEventListener('blur', onInputFormBlur);
  });
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

const getInputForm = (input) => {
  if (input.classList.contains('text__hashtags') || input.classList.contains('text__description')) {
    return true;
  }
};

const onUploadChange = () => {
  showForm();
  closeUpload.addEventListener('click', oncloseUploadClick);
  document.addEventListener('keydown', onEscapeKeydown);
  formUpload.addEventListener('submit', onFormUploadSubmit);

  inputForms.forEach((inputForm)=> {
    if (getInputForm(inputForm)) {
      inputForm.addEventListener('focus', onInputFormFocus);
      inputForm.addEventListener('blur', onInputFormBlur);
    }
  });
};

upload.addEventListener('change', onUploadChange);


