import {isEscapeKey} from './util.js';

const massageSuccess = document.querySelector('#success').content.querySelector('.success');
const massageError = document.querySelector('#error').content.querySelector('.error');
const body = document.body;
let closeButton;
let response;

const isUpperOpenModal = () => {
  const upperModal = document.querySelector('.error') ?? false;
  if (upperModal) {
    return true;
  } else {
    return false;
  }
};

const onDocumnetKeydown = (evt) => {
  if (isEscapeKey) {
    evt.preventDefault();
    evt.stopImmediatePropagation();
    closeMassage(response);
  }
};

const onDocumentClick = (evt) => {
  const cardMessage = response.querySelector('.error__inner') ?? response.querySelector('.success__inner');

  if (!evt.composedPath().includes(cardMessage)) {
    closeMassage(response);
  }
};

const onCloseButtonClick = () => {
  closeMassage(response);
};

function closeMassage(massage) {
  massage.remove();
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumnetKeydown);
}

const createMassage = (massage) => {
  response = massage.cloneNode(true);
  return response;
};

const openMassage = (massage) => {
  createMassage(massage);
  body.append(response);
  closeButton = response.querySelector('[class$= "_button"]');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumnetKeydown);
  return closeButton;
};

const openMassageSuccess = () => {
  openMassage(massageSuccess);
};

const openMassageError = () => {
  openMassage(massageError);
};

export {openMassageSuccess, openMassageError, isUpperOpenModal};

