export const STEP_COMMENTS = 5;

export const ERROR_SET = {
  MAX: 20,
  FIRST_SYMBOL: /^#/,
  MIN: 2,
  ALLOWED_VALUE: /^#[a-zа-яё0-9]$/i,
  HASHTAG_REG:  /^#[a-zа-яё0-9]{1,19}$/i,
  HASHTAG_COUNT_MAX: 5,
  LENGTH_DESCRIPTION_MAX: 140,
};

export const ERROR_MESSAGE = {
  ERROR_LENGTH: `максимальное количество хэштэгов ${ERROR_SET.HASHTAG_COUNT_MAX}`,
  ERROR_REPEAT: 'хэштеги повторяются',
  ERROR_NO_VALIDATE: 'введён невалидный хэштег',
  ERROR_DESCRIPTION: `длина комментария больше ${ERROR_SET.LENGTH_DESCRIPTION_MAX} символов`,
  ERROR_NO_VALID_SYMBOL: 'после решётки допустимы только буквы и числа',
  ERROR_LENGTH_HASHTAG: `максимальная длина одного хэштега ${ERROR_SET.MAX} символов, включая решётку`,
  ERROR_NO_HASHTAG: 'хэштэг должен начинаться с символа #',
  ERROR_ONLY_HASHTAG: 'хештег не может состоять только из одной решётки',
};

export const SCALE_CONSTANTS = {
  MIN: 25,
  MAX: 100,
  DEFAULT_SCALE: function() {
    return SCALE_CONSTANTS.MAX;
  },
  STEP: 25,
  UNIT: '%',
  FACTOR: 0.01,
};

const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN:'marvin',
  PHOBOS:'phobos',
  HEAT:'heat',
  NONE: 'none',
};

export const EFFECTS_SET = {
  [EFFECTS.CHROME]: {
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

  [EFFECTS.SEPIA]:{
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

  [EFFECTS.MARVIN]: {
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

  [EFFECTS.PHOBOS]: {
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

  [EFFECTS.HEAT]: {
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

  [EFFECTS.NONE]: {
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

export const COUNT_PHOTO = 10;

export const TIMEOUT_DELAY = 500;

export const FILE_FORMATS = ['.jpg', 'jpeg', '.png'];
