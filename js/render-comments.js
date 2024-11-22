import {getIndexes} from './util.js';

const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const countCommentsShow = 5;
//const commentsLoader = document.querySelector('.comments-loader');


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
    //console.log(`indexes = ${ indexes()}` + `      showComments.length = ${ showComments.length}`);
    console.log(`Добавляется = ${ showComments.length}`);

    showComments.forEach((item) => {
      const newComment = renderComment(item);
      fragment.append(newComment);
    });
    socialComments.append(fragment);
    return socialComments;
  };


  //const partComments = indexes();
  //console.log(`partComments 1 - ${ partComments}`);
  //console.log(`indexes() ${ indexes()}`);


  //socialComments.append(fragment);
  //console.log(`socialComments ${ socialComments.children.length}`);
  //return socialComments;
};


/*


*/

/*

const render = (comments, cloneElement, container) => {
  const fragment = document.createDocumentFragment();
  const commentsShow = [];
  commentsShow.length = 0;
  const countCommentsShow = 5;
  let minIndex = 0;
  let maxIndex = (comments.length <= countCommentsShow)? comments.length : (countCommentsShow + minIndex >= comments.length)? comments.length : countCommentsShow + minIndex;
  commentsShow.push(...comments.slice(minIndex, maxIndex));
  console.log(commentsShow);

  commentsShow.forEach(({avatar, username, message }) => {
    const newComment = cloneElement.cloneNode(true);
    newComment.src = avatar;
    newComment.alt = username;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);
  });
  container.append(fragment);
};*/


export {render};
