import {getIndexes} from './util.js';
const STEP_COMMENTS = 5;

const renderComment = ({name, avatar, message}, templateComment) => {
  const newComment = templateComment.cloneNode(true);
  const autorComment = newComment.querySelector('.social__picture');
  autorComment.src = avatar;
  autorComment.alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const render = (comments, commentsList, templateComment) => {
  const indexes = getIndexes(comments, STEP_COMMENTS);

  return function () {
    const fragment = document.createDocumentFragment();
    const showComments = comments.slice(...indexes());

    showComments.forEach((item) => {
      const newComment = renderComment(item, templateComment);
      fragment.append(newComment);
    });
    commentsList.append(fragment);
    return commentsList;
  };
};

export {render};
