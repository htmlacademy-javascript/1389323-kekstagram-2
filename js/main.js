import {render as renderPictures, photosList} from './render.js';
import {descriptionPhotosList} from './data.js';
import {renderBigPicture} from './render-full-photo.js';

renderPictures(descriptionPhotosList);
const pictureContainer = document.querySelector('.pictures');

renderBigPicture(pictureContainer, photosList);

