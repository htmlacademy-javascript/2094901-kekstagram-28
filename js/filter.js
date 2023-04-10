import { renderCards } from './picture.js';
import { RANDOM_NUMBER_CARD } from './constant.js';
import { debounce } from './util.js';

const filterContainer = document.querySelector('.img-filters');
const photos = [];

const setActiveButton = (evt) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const filterData = (filter) => {
  switch (filter) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return [...photos].sort(() => Math.random() - 0.5).slice(0, RANDOM_NUMBER_CARD);
    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};

filterContainer.addEventListener('click', debounce((evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    const id = evt.target.id;
    renderCards(filterData(id));
    setActiveButton(evt);
  }
}));

const showFilterContainer = (data) => {
  photos.push(...data.slice());
  filterContainer.classList.remove('img-filters--inactive');
  renderCards(data);
};

export { showFilterContainer };
