import './styles.css';
import itemTemplate from './templates/item.hbs';
import refs from './js/refs';

function fetchCountries() {
  const url = `https://restcountries.eu/rest/v2/`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      //   console.log(itemTemplate(data));
      refs.items.innerHTML = itemTemplate(data);
    });
}
fetchCountries();
console.log(refs);
