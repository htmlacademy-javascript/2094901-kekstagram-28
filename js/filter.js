const filterContainer = document.querySelector('.img-filters');
const defaultButtton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

const showFilterContainer = () => {
  filterContainer.classList.remove('img-filters--inactive');
};

const getDefaultPhoto = () => {
  defaultButtton.classList.add('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
};

const getRandomPhoto = () => {
  randomButton.classList.add('img-filters__button--active');
  defaultButtton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
};

const getDiscussedPhoto = () => {
  discussedButton.classList.add('img-filters__button--active');
  defaultButtton.classList.remove('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
};


defaultButtton.addEventListener('click', getDefaultPhoto);
randomButton.addEventListener('click', getRandomPhoto);
discussedButton.addEventListener('click', getDiscussedPhoto);

export {showFilterContainer};
