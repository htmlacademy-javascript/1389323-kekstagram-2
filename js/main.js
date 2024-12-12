import {render as renderPictures} from './render.js';
//import {descriptionPhotosList} from './data.js';
import './form-upload.js';
import {getData} from './api.js';
import {renderError} from './errors.js';

//renderPictures(descriptionPhotosList);
//console.log(descriptionPhotosList);
getData(renderPictures, renderError);
//getData(console.log, console.log);


