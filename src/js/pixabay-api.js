import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export { axiosCall };

function axiosCall(text, pageN, pageL, thenCall) {
  if (pageN > 0 && pageL > 0) {
    document.querySelector('.loader').classList.toggle('visually-hidden');
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
        thenCall(response.data.hits);
      })
      .catch(error => {
        iziToast.error({
          title: 'Помилка!',
          message: error.message,
          position: 'topRight',
        });
      })
      .finally(() => {
        document.querySelector('.loader').classList.toggle('visually-hidden');
      });
  }
}
