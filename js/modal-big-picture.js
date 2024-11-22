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
const countCommentsShow = 5;
//const socialComment = socialComments.querySelector('.social__comment');
//const socialCommentCount = document.querySelector('.social__comment-count');
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
  addShowComment = '';
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
};

const checkCountShowComments = (elements) => {
  if (Number(elements.length) <= Number(socialComments.children.length)) {
    hiddenCommentsLoader();
  } else {
    showCommentsLoader();
  }
};

/*const addComment = (comments) => {
  renderComments(comments);
  checkCountShowComments(comments);

  console.log(`socialComments.children.length ${ socialComments.children.length }:` + `comments ${ comments.length}`);
  countShownComment.textContent = socialComments.children.length;
};*/

const render = ({id, url, likes, comments, description}) => {
  bigPicture.dataset.idComments = `comment${ id}`;
  const commentId = bigPicture.dataset.idComments;
  console.log(commentId);


  bigPictureImage.src = url;
  likesCount.textContent = likes;
  totalCountComment.textContent = comments.length;
  socialCaption.textContent = String(description);
  addShowComment = renderComments(comments);
  addShowComment();
  //renderComments(comments);
  console.log(`socialComments.children.length ${ socialComments.children.length}`);
  checkCountShowComments(comments);
  countShownComment.textContent = socialComments.children.length;

  commentsLoader.addEventListener('click', () => {
    addShowComment();
    checkCountShowComments(comments);
    countShownComment.textContent = socialComments.children.length;
    console.log(`socialComments.children.length ${ socialComments.children.length }:` + `comments ${ comments.length}`);

  });


  /*const addComments = () => {
    renderComments(comments);


    console.log(`socialComments.children.length ${ socialComments.children.length }:` + `comments ${ comments.length}`);
    countShownComment.textContent = socialComments.children.length;
  };*/

  //
};


const openModal = (bigPhoto) => {
  showModal();
  closeBigPictureButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKeydown);
  socialComments.innerHTML = '';
  render(bigPhoto);
};


/*


const renderBigPicture = (container, photos) => {
  const pictures = container.querySelectorAll('.picture__img');

  const openBigPicture = (evt)=>{
    if (evt.target.closest('.picture')) {
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');

      const indexMiniPicture = findIndexElementTarget(pictures, evt.target);

      photos.forEach((photo, indexPhoto) => {
        if (indexPhoto === indexMiniPicture) {
          bigPictureImage.src = photo.url;
          likesCount.textContent = photo.likes;
          countShownComment.textContent = photo.comments.length;
          totalCountComment.textContent = photo.comments.length;
          socialComments.innerHTML = '';
          //socialComments.append(renderComments(photo.comments, socialComment));
          const addComments = renderComments(photo.comments, socialComment, socialComments);
          addComments();
          addComments();
          socialCaption.textContent = String(photo.description);


          const addShowComments = (evt) => {
            evt.preventDefault();
            console.log('hello');
            addComments();
          };

          commentsLoader.addEventListener('click', addShowComments);
        }
      });

      closeBigPictureButton.addEventListener('click', closeBigPicture);
      document.addEventListener('keydown', onDocumentKeydown);
    }
  };
  container.addEventListener('click', openBigPicture);
};


return function () {
  if (maxIndex < comments.length) {
   minIndex += countCommentsShow;
   maxIndex = (comments.length <= countCommentsShow)? comments.length : (countCommentsShow + minIndex >= comments.length)? comments.length : countCommentsShow + minIndex;
   commentsShow.length = 0;
   console.log('minIndex' + minIndex);
   console.log('maxIndex' + maxIndex);
   commentsShow.push(...comments.slice(minIndex, maxIndex));
   console.log(commentsShow);
 };
 return minIndex;
}*/

export {openModal};


