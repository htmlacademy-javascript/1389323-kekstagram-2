import {imageUploadPreview} from './scale-image.js';

const containerSlider = document.querySelector('.img-upload__effect-level');
const levelEffect = containerSlider.querySelector('.effect-level__value');
const sliderElement = containerSlider.querySelector('.effect-level__slider');
const effectList = document.querySelector('.effects__list');

const resetEffect = (isOrigin) => {
  imageUploadPreview.style.filter = 'none';
  if (isOrigin === 'origin') {
    containerSlider.classList.add('visually-hidden');
  } else {
    containerSlider.classList.remove('visually-hidden');
  }
};

levelEffect.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min:1,
    max:100,
  },
  start:100,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
        return value.toFixed(1);
      }
    },
    from: (value) => parseFloat(value),
  },

});

const changeLevelEffect = (value) => {
  const currentEffect = document.querySelector('input[type="radio"]:checked');
  switch(currentEffect.value) {
    case 'chrome':
      imageUploadPreview.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      imageUploadPreview.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      imageUploadPreview.style.filter = `invert(${`${value}%`} )`;
      break;
    case 'phobos':
      imageUploadPreview.style.filter = `blur(${`${value}px`})`;
      break;
    case 'heat':
      imageUploadPreview.style.filter = `brightness(${value})`;
      break;
  }
};

sliderElement.noUiSlider.on('update', () => {
  levelEffect.value = sliderElement.noUiSlider.get();
  changeLevelEffect(levelEffect.value);
  return levelEffect.value;
});

function onEffectListChange(evt) {
  resetEffect();
  const checkedEffect = evt.target;
  switch(checkedEffect.value) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;

    case 'sepia':
      sliderElement.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;

    case 'marvin':
      sliderElement.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;

    case 'phobos':
      sliderElement.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;

    case 'heat':
      sliderElement.noUiSlider.updateOptions ({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;

    case 'none':
      resetEffect('origin');
      break;
  }
}

effectList.addEventListener('change', onEffectListChange);

export {resetEffect, onEffectListChange, effectList};

