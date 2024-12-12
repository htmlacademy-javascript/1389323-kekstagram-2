import {ALERT_ERROR_TIME} from './constants.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

const renderError = () => {
  const newError = dataError.cloneNode(true);
  body.append(newError);

  setTimeout(() => {
    body.remove(newError);
  },
  ALERT_ERROR_TIME);
};

export {renderError};
