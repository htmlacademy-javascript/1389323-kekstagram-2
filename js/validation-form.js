import {isDuplicate} from './util.js';

const formUpload = document.querySelector('.img-upload__form');
const hashtagInput = formUpload.querySelector('.text__hashtags');
const descriptionInput = formUpload.querySelector('.text__description');
const hashtagReg = /^#[a-zа-яё0-9]{1,19}$/i;
const getDescriptionErrorMessage = 'длина комментария больше 140 символов';
let error;

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
}, true);

const getHashtagError = (value) => {
  const hashtags = value
    .split(' ')
    .filter((item) => {
      if (item !== '') {
        return item;
      }
    });

  if (hashtags.length > 5) {
    error = 'превышено количество хэштегов';
  } else if (isDuplicate(hashtags)) {
    error = 'хэштеги повторяются';
  } else {
    const isValidHashtag = hashtags.every((formatHashtag) => hashtagReg.test(formatHashtag));
    if (!isValidHashtag) {
      error = 'введён невалидный хэштег';
    }
  }
  return error;
};

const validateHashtag = (value) => {
  error = '';
  if (value.length === 0) {
    return true;
  } else {
    return !((getHashtagError(value).length ?? 0) > 0);
  }
};

const getHashtagErrorMessage = (value) => getHashtagError(value);

pristine.addValidator(hashtagInput, validateHashtag, getHashtagErrorMessage);

const validateDescription = (textContent) => textContent.length <= 140;

pristine.addValidator(descriptionInput, validateDescription, getDescriptionErrorMessage);

const onFormUploadSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

export {onFormUploadSubmit, pristine};

