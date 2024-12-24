import {getRandomArray, debounce} from './util.js';
import {COUNT_PHOTO, TIMEOUT_DELAY} from './constants.js';

const filtersContainer = document.querySelector('.img-filters');

const sortPhoto = (elementA, elementB) => {
  const countCommentA = elementA.comments.length;
  const countCommentB = elementB.comments.length;
  return countCommentB - countCommentA;
};

const FilterSet = {
  default: (elements) => elements.slice(),
  random: (elements) => getRandomArray(elements, COUNT_PHOTO),
  discussed: (elements) => elements.slice().sort(sortPhoto),
};

const changeActiveButton = (currentButton) => {
  const previousActiveElement = filtersContainer.querySelector('.img-filters__button--active');
  previousActiveElement.classList.remove('img-filters__button--active');
  currentButton.classList.add('img-filters__button--active');
};

const filterData = (elements, render) => {
  let data = elements;
  render(data);
  filtersContainer.classList.remove('img-filters--inactive');

  filtersContainer. addEventListener('click', debounce(({target}) => {
    const activeElement = target;

    if (activeElement.classList.contains('img-filters__button')) {
      changeActiveButton(target);

      document.querySelectorAll('.picture')
        .forEach((picture) => picture.remove());

      const activeButton = activeElement.id.replace('filter-', '');
      const getData = FilterSet[activeButton];
      data = getData(elements);
      render(data);
    }
  }, TIMEOUT_DELAY));

};

export {filterData};
