import {getIndexes} from './util.js';

const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const countCommentsShow = 5;


const renderComment = ({name, avatar, message}) => {
  const newComment = socialComment.cloneNode(true);
  const autorComment = newComment.querySelector('.social__picture');
  autorComment.src = avatar;
  autorComment.alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};


const render = (comments) => {
  const indexes = getIndexes(comments, countCommentsShow);

  return function () {
    const fragment = document.createDocumentFragment();
    const showComments = comments.slice(...indexes());

    showComments.forEach((item) => {
      const newComment = renderComment(item);
      fragment.append(newComment);
    });
    socialComments.append(fragment);
    return socialComments;
  };
};

export {render};
