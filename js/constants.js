export const HASHTAG_REG = /^#[a-zа-яё0-9]{1,19}$/i;
export const HASHTAG_MAX = 5;
export const LENGTH_DESCRIPTION_MAX = 140;
export const MAX_SYMBOLS = 20;

export const ERROR_MESSAGE = {
  errorLength: `максимальное количество хэштэгов ${HASHTAG_MAX}`,
  errorRepeat: 'хэштеги повторяются',
  errorNoValidate: 'введён невалидный хэштег',
  errorDescription: `длина комментария больше ${LENGTH_DESCRIPTION_MAX} символов`,
  errorNoValidSimbol: 'после решётки допустимы только буквы и числа',
  errorLengthHashtag: `максимальная длина одного хэштега ${MAX_SYMBOLS} символов, включая решётку`,
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

