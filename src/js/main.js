import axios from 'axios';
import { createGalleryItem, deleteGalleryItem } from './render-functions.js';

let textSearch = 'rhododendron';
let pageNum = 1;
let pageLen = 40;

function axiosCall(text, pageN, pageL) {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49309273-01bbbdbc5dd72a8afdb67bc06',
        q: text,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: pageN,
        per_page: pageL,
      },
    })
    .then(response => {
      createGalleryItem(response.data.hits);
    })
    .catch(error => {
      console.log(error);
    });
}

// *****************************************************************************
// відслідковує мутації і щось виконає, отримуючі інф. про мутацію
let observer = new MutationObserver(mutationRecords => {
  console.log(mutationRecords[0].type); // тип мутації
  console.log(mutationRecords[0].target); // об'єкт мутації
  // далі  - додано чи видалено, або і те і те
  console.log(
    mutationRecords[0].addedNodes.length > 0 ||
      mutationRecords[0].removedNodes.length > 0
      ? 'Added  Removed'
      : mutationRecords[0].removedNodes.length > 0
      ? 'Remove'
      : mutationRecords[0].addedNodes.length > 0
      ? 'Added'
      : ''
  );
});
// вказує на чому відслідковувати мутації раніше створеному observer = new MutationObserver()
observer.observe(document.querySelector('.for-mutation-observer'), {
  childList: true,
  subtree: true,
});

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  deleteGalleryItem();
  axiosCall(event.target.elements['search-text'].value, 5, 39);
});

//axiosCall(textSearch, pageNum, pageLen);
