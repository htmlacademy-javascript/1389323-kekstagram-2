import {EFFECTS_SET} from './constants.js';

const imageUploadPreview = document.querySelector('.img-upload__preview img');
const containerSlider = document.querySelector('.img-upload__effect-level');
const levelEffect = containerSlider.querySelector('.effect-level__value');
const sliderElement = containerSlider.querySelector('.effect-level__slider');

const resetEffect = (isNone = 'none') => {
  imageUploadPreview.style.filter = 'none';

  if (isNone === 'none') {
    containerSlider.classList.add('visually-hidden');
    sliderElement.noUiSlider.set(EFFECTS_SET[isNone].setting.range.max);
  } else {
    containerSlider.classList.remove('visually-hidden');
  }
};

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

const changeLevelEffect = (valueLevelEffect) => {
  const currentEffect = document.querySelector('input[type="radio"]:checked').value;
  if (EFFECTS_SET[currentEffect]) {
    const currentFilter = EFFECTS_SET[currentEffect].effect;
    const currentUnit = EFFECTS_SET[currentEffect].unit;
    imageUploadPreview.style.filter = `${currentFilter}(${`${valueLevelEffect}${currentUnit}`})`;
  }
};

sliderElement.noUiSlider.on('update', () => {
  levelEffect.value = sliderElement.noUiSlider.get();
  changeLevelEffect(levelEffect.value);
});

function onEffectListChange(evt) {
  const checkedEffect = evt.target.value;
  resetEffect(checkedEffect);

  if (EFFECTS_SET[checkedEffect]) {
    sliderElement.noUiSlider.updateOptions(EFFECTS_SET[checkedEffect].setting);
    sliderElement.noUiSlider.set(EFFECTS_SET[checkedEffect].setting.range.max);
  }
}

export {resetEffect, onEffectListChange};

