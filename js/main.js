import {render as renderPictures} from './render.js';
import {descriptionPhotosList} from './data.js';
import {renderBigPicture} from './render-full-photo.js';

const photosList = renderPictures(descriptionPhotosList);
const pictureContainer = document.querySelector('.pictures');

renderBigPicture(pictureContainer, photosList);

