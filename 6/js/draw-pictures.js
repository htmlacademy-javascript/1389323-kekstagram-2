import {descriptionPhotosList} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fragmentPicture = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');
const pictureList = descriptionPhotosList;

pictureList.forEach(({url, description, likes, comments})=> {
  const newPicture = templatePicture.cloneNode(true);
  const pictureImage = newPicture.querySelector('.picture__img');
  pictureImage.src = url;
  pictureImage.alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  fragmentPicture.append(newPicture);
});

picturesContainer.append(fragmentPicture);
