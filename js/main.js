import {render as renderPictures} from './render.js';
import './form-upload.js';
import {getData} from './api.js';
import {renderError} from './errors.js';
import {filterData} from './filters.js';

const originalData = await getData(renderError);

try {
  if (!originalData) {
    throw new Error();
  }
  renderPictures(originalData);
  filterData(originalData, renderPictures);
} catch (err) {
  renderError();
}
