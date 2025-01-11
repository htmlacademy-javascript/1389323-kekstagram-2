import {COUNT_PHOTO} from './constants.js';

const filtersContainer = document.querySelector('.img-filters');

const compareComments = (elementA, elementB) => {
  const countCommentA = elementA.comments.length;
  const countCommentB = elementB.comments.length;
  return countCommentB - countCommentA;
};

const FilterSet = {
  activateDefault: (elements) => elements.slice(),
  activateRandom: (elements) => elements.slice().sort(() => Math.random() - 0.5).slice(0, COUNT_PHOTO),
  activateDiscussed: (elements) => elements.slice().sort(compareComments),
};

const changeActiveButton = (currentButton) => {
  const previousActiveElement = filtersContainer.querySelector('.img-filters__button--active');
  previousActiveElement.classList.remove('img-filters__button--active');
  currentButton.classList.add('img-filters__button--active');
};

const filterData = (elements, render) => {
  let data;
  filtersContainer.classList.remove('img-filters--inactive');

  filtersContainer.addEventListener('click', ({target}) => {
    if (target.classList.contains('img-filters__button')) {
      changeActiveButton(target);
      const activeButton = `activate${target.id.replace('filter-', '')
        .replace(/^./, (char) => char.toUpperCase())}`;
      data = FilterSet[activeButton](elements);
      render(data);
    }
  });
};

export {filterData};
