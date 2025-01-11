import {isEscapeKey} from './util.js';

const messageSuccess = document.querySelector('#success').content.querySelector('.success');
const messageError = document.querySelector('#error').content.querySelector('.error');
const body = document.body;
let closeButton;
let response;

const isUpperOpenModal = () => {
  const upperModal = document.querySelector('.error') ?? false;
  if (upperModal) {
    return true;
  }
  return false;
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

function closeMassage(message) {
  message.remove();
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumnetKeydown);
}

const createMessage = (message) => {
  response = message.cloneNode(true);
  return response;
};

const openMessage = (message) => {
  createMessage(message);
  body.append(response);
  closeButton = response.querySelector('[class$= "_button"]');
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumnetKeydown);
  return closeButton;
};

const openMessageSuccess = () => {
  openMessage(messageSuccess);
};

const openMessageError = () => {
  openMessage(messageError);
};

export {openMessageSuccess, openMessageError, isUpperOpenModal};

