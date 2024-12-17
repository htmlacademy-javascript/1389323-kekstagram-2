export const ERROR_SET = {
  max : 20,
  firstSimbol : /^#/,
  min : 2,
  allowedValue: /^#[a-zа-яё0-9]$/i,
  hashtagReg :  /^#[a-zа-яё0-9]{1,19}$/i,
  hashtagCountMax : 5,
  lengthDescriptionMax : 140,
};

export const ERROR_MESSAGE = {
  errorLength: `максимальное количество хэштэгов ${ERROR_SET.hashtagCountMax}`,
  errorRepeat: 'хэштеги повторяются',
  errorNoValidate: 'введён невалидный хэштег',
  errorDescription: `длина комментария больше ${ERROR_SET.lengthDescriptionMax} символов`,
  errorNoValidSimbol: 'после решётки допустимы только буквы и числа',
  errorLengthHashtag: `максимальная длина одного хэштега ${ERROR_SET.max} символов, включая решётку`,
  errorNoHashtag: 'хэштэг должен начинаться с символа #',
  errorOnlyHashtag: 'хештег не может состоять только из одной решётки',
};

export const SCALE_CONSTANTS = {
  min: 25,
  max: 100,
  defaultScale: function() {
    return SCALE_CONSTANTS .max;
  },
  step: 25,
  unit: '%',
  factor: 0.01,
};

export const EFFECTS_SET = {
  chrome: {
    setting: {
      range:{
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    effect: 'grayscale',
    unit: '',
  },

  sepia:{
    setting: {
      range:{
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    effect: 'sepia',
    unit: '',
  },

  marvin: {
    setting: {
      range:{
        min: 0,
        max: 100,
      },
      step: 1,
    },
    effect: 'invert',
    unit: '%',
  },

  phobos: {
    setting: {
      range:{
        min: 0,
        max: 3,
      },
      step: 0.1,
    },
    effect: 'blur',
    unit: 'px',
  },

  heat: {
    setting: {
      range:{
        min: 1,
        max: 3,
      },
      step: 0.1,
    },
    effect: 'brightness',
    unit: '',
  },

  none: {
    setting: {
      range:{
        min: 1,
        max: 100,
      },
      step: 1,
    },
    effect: 'none',
  },
};

export const ALERT_ERROR_TIME = 5000;

export const METHOD = {
  GET: 'GET',
  POST: 'POST'
};
export const URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

export const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '',
};

export const SUBMIT_BUTTON_TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляю...',
};
