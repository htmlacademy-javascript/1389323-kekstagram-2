import {isEscapeKey} from './util.js';
import {render as renderComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.body;
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const countShownComment = bigPicture.querySelector('.social__comment-shown-count');
const totalCountComment = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = document.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');
let addShowComment;

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeModal = () => {
  hideModal();
  closeBigPictureButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscapeKeydown);
  commentsLoader.removeEventListener('click', addComments);
};

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeModal();
  }
}

const showCommentsLoader = () => {
  if (commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden');
  }
};

const hiddenCommentsLoader = () => {
  commentsLoader.classList.add('hidden');
  commentsLoader.removeEventListener('click', addComments);
};

const checkCountShowComments = () => {
  if (Number(totalCountComment.textContent) <= socialComments.children.length) {
    hiddenCommentsLoader();

  } else {
    showCommentsLoader();
  }
};

const render = ({id, url, likes, comments, description}) => {
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  totalCountComment.textContent = comments.length;
  socialCaption.textContent = String(description);
  addShowComment = renderComments(comments);
  addShowComment();
  checkCountShowComments();
  countShownComment.textContent = socialComments.children.length;
};

function addComments () {
  addShowComment();
  checkCountShowComments();
  countShownComment.textContent = socialComments.children.length;
}


const openModal = (bigPhoto) => {
  showModal();
  closeBigPictureButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKeydown);
  socialComments.innerHTML = '';
  render(bigPhoto);
  commentsLoader.addEventListener('click', addComments);
};

export {openModal};


