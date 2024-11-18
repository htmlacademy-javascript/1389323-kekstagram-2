import {findIndexElementTarget, isEscapeKey} from './util.js';
import {render as renderComments} from './render-comments';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const countShownComment = document.querySelector('.social__comment-shown-count');
const totalCountComment = document.querySelector('.social__comment-total-count');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.body;
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeBigPictureButton.removeEventListener('click', closeBigPicture);
}

const renderBigPicture = (container, photos) => {
  const pictures = container.querySelectorAll('.picture__img');

  const openBigPicture = (evt)=>{
    if (evt.target.closest('.picture')) {
      bigPicture.classList.remove('hidden');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');

      const indexMiniPicture = findIndexElementTarget(pictures, evt.target);

      photos.forEach((photo, indexPhoto) => {
        if (indexPhoto === indexMiniPicture) {
          bigPictureImage.src = photo.url;
          likesCount.textContent = photo.likes;
          countShownComment.textContent = photo.comments.length;
          totalCountComment.textContent = photo.comments.length;
          socialComments.innerHTML = '';
          socialComments.append(renderComments(photo.comments, socialComment));
          socialCaption.textContent = String(photo.description);
        }
      });

      closeBigPictureButton.addEventListener('click', closeBigPicture);

      document.addEventListener('keydown', onDocumentKeydown);
    }
  };

  container.addEventListener('click', openBigPicture);
};

export {renderBigPicture};


