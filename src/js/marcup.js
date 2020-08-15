import refs from './refs';
function updateMarkup(param) {
  refs.items.innerHTML = '';
  refs.items.insertAdjacentHTML('beforeend', param);
}
export default updateMarkup;
