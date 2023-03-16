import { isEscapeKey } from './util.js';

const modal = document.querySelector('.big-picture');
const modalImage = modal.querySelector('.big-picture__img img');
const modalLikes = modal.querySelector('.likes-count');
const modalCommentsCount = modal.querySelector('.comments-count');
const modalCommentsList = modal.querySelector('.social__comments');
const modalCommentItem = modal.querySelector('.social__comment');
const buttonCancel = modal.querySelector('.big-picture__cancel');
const body = document.body;

buttonCancel.addEventListener('click', () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

const showModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
};

const renderComment = (comment) => {
  const cloneComment = modalCommentItem.cloneNode(true);
  cloneComment.querySelector('.social__picture').src = comment.avatar;
  cloneComment.querySelector('.social__text').textContent = comment.message;
  cloneComment.querySelector('.social__picture').alt = comment.name;
  return cloneComment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.append(renderComment(comment));
  });
  modalCommentsList.innerHTML = '';
  modalCommentsList.append(fragment);
};

const renderModal = (photo) => {
  showModal();
  modalImage.src = photo.url;
  modalLikes.textContent = photo.likes;
  modalCommentsCount.textContent = photo.comments.length;
  renderComments(photo.comments);
};

export {renderModal};
