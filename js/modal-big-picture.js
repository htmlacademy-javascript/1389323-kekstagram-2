import {isEscapeKey} from './util.js';
import {render as renderComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.body;
const closeBigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const countShownComment = bigPicture.querySelector('.social__comment-shown-count');
const totalCountComment = bigPicture.querySelector('.social__comment-total-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
let addShowComment;

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const onCommentsLoaderClick = () => {
  addComments();
};

const closeModal = () => {
  hideModal();
  closeBigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscapeKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function onBigPictureCancelClick (evt) {
  evt.preventDefault();
  closeModal();
}

const isAllShowComments = () => {
  if (Number(totalCountComment.textContent) <= socialComments.children.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

function addComments () {
  addShowComment();
  isAllShowComments();
  countShownComment.textContent = socialComments.children.length;
}

const render = ({url, likes, comments, description}) => {
  bigPictureImage.src = url;
  likesCount.textContent = likes;
  totalCountComment.textContent = comments.length;
  socialCaption.textContent = String(description);
  addShowComment = renderComments(comments, socialComments, socialComment);
  addComments();
};

const openModal = (bigPhoto) => {
  showModal();
  closeBigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onEscapeKeydown);
  socialComments.innerHTML = '';
  render(bigPhoto);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export {openModal};


