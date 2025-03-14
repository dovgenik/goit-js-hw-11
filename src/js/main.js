import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


import { createGalleryItem} from "./1-gallery.js";
const state = {
  images: []
}

function axiosCall() {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '49309273-01bbbdbc5dd72a8afdb67bc06',
        q: 'mountain+alpinism', //yellow+flowers
        image_type: 'photo',
        page: 2,
        per_page: 30,
      },
    })
    .then(response => {
      state.images = response.data.hits;
      
      createGalleryItem(state.images);
    })
    .catch(error => {
      console.log(error);
    });
}

axiosCall();


// const inputDate = document.querySelector('.search-text');
// const promisForm = document.querySelector('.form');

// promisForm.addEventListener('submit', event => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData.entries());

//   makePromise(data.delay, data.state === 'fulfilled' ? true : false)
//     .then(value =>
//       iziToast.success({ message: `✅ Fulfilled promise in ${value}ms` })
//     )
//     .catch(error =>
//       iziToast.error({ message: `❌ Rejected promise in ${error}ms` })
//     );

//   promisForm.reset();
// });
