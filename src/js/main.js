import axios from 'axios';
import { createGalleryItem, deleteGalleryItem} from './render-functions.js';
export { observerIntersection };
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

const callbackIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Елемент "${entry.target.classList[1]}" тут`);
    } else {
      console.log(`Елемент "${entry.target.classList[1]}" пішов геть`);
    }
  });
};
//**********************************

const observerIntersection = new IntersectionObserver(callbackIntersection);

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  deleteGalleryItem();
  axiosCall(event.target.elements['search-text'].value, 5, 18);
});

//***************************************************** 



//axiosCall(textSearch, pageNum, pageLen);
