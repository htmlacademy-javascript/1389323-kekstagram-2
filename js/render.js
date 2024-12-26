import {openModal} from './modal-big-picture.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fragmentPicture = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');
const photosList = [];

const clearPictures = () => {
  document.querySelectorAll('.picture')
    .forEach((picture) => picture.remove());
};

const render = (photos) => {
  photosList.length = 0;
  photosList.push(...structuredClone(photos));

  photosList.forEach(({id, url, description, likes, comments})=> {
    const newPicture = templatePicture.cloneNode(true);
    const pictureImage = newPicture.querySelector('.picture__img');
    newPicture.dataset.idPhoto = id;
    pictureImage.src = url;
    pictureImage.alt = description;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments.length;
    fragmentPicture.append(newPicture);
  });

  clearPictures();
  picturesContainer.append(fragmentPicture);
  return photosList;
};

picturesContainer.addEventListener('click', (evt)=>{
  const card = evt.target.closest('.picture');
  if (card) {
    evt.preventDefault();
    const id = Number(card.dataset.idPhoto);
    const currentPhoto = photosList.find((item)=>item.id === id);
    openModal(currentPhoto);
  }
});

export {render};
