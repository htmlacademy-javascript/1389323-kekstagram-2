import {isDuplicate, detailsError} from './util.js';
import {ERROR_MESSAGE, ERROR_SET} from './constants.js';

const formUpload = document.querySelector('.img-upload__form');
const hashtagInput = formUpload.querySelector('.text__hashtags');
const descriptionInput = formUpload.querySelector('.text__description');
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
    .toLowerCase()
    .split(' ')
    .filter((item) => {
      if (item !== '') {
        return item;
      }
    });

  if (hashtags.length > ERROR_SET.hashtagCountMax) {
    error = ERROR_MESSAGE.errorLength;
  } else if (isDuplicate(hashtags)) {
    error = ERROR_MESSAGE.errorRepeat;
  } else {
    const isValidHashtag = hashtags.every((formatHashtag) => ERROR_SET.hashtagReg.test(formatHashtag));
    if (!isValidHashtag) {
      error = `${ERROR_MESSAGE.errorNoValidate} : ${detailsError(hashtags, ERROR_MESSAGE, ERROR_SET)}`;
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

const validateDescription = (textContent) => textContent.length <= ERROR_SET.lengthDescriptionMax;

pristine.addValidator(descriptionInput, validateDescription, ERROR_MESSAGE.errorDescription);

const isValid = () => pristine.validate();

const reset = () => pristine.reset();

export {isValid, reset};

