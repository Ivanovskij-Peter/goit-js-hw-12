import './styles.css';
import debounse from 'lodash.debounce';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs';
import fetchCountries from './js/fetch';
import updateMarkup from './js/marcup';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

refs.form.addEventListener('submit', evt => evt.preventDefault());

refs.input.addEventListener('input', debounse(setData, 500));

function setData(event) {
  let search = event.target.value;
  fetchCountries(search).then(data => {
    createElement(data);
  });
}
function createElement(arr) {
  if (arr.length > 10) {
    errorMessage();
  } else {
    const murkup = itemTemplate(arr);
    updateMarkup(murkup);
  }
}
function errorMessage() {
  error({
    text: 'Too many matches found.Please enter a more specific query!',
  });
}
