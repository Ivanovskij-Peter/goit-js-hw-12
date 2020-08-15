import itemTemplate from '../templates/item.hbs';
import updateMarkup from '../js/marcup';
function fetchCountries(search) {
  const url = `https://restcountries.eu/rest/v2/name/${search}`;
  return fetch(url).then(res => res.json());
}
export default fetchCountries;
