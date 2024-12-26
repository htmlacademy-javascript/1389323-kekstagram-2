import {FILE_FORMATS} from './constants.js';

const preview = document.querySelector('.img-upload__preview img');
const uploadInput = document.querySelector('#upload-file');
const previewEffects = document.querySelectorAll('.effects__preview');

const uploadPreview = () => {
  const newFile = uploadInput.files[0];
  const fileName = newFile.name.toLowerCase();
  const isFormatImage = FILE_FORMATS.some((it) => fileName.endsWith(it));
  if (isFormatImage) {
    const fileUrl = URL.createObjectURL(newFile);
    preview.src = fileUrl;
    previewEffects.forEach((effect) => {
      effect.style.backgroundImage = `url(${fileUrl})`;
    });
  }
};

export {uploadPreview};

