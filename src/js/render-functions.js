import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


export let page = 1;
export const mainVar ={
  run: 1,
  searchText: '',
  runStarted: false,
};
export {
  createGalleryItem,
  deleteGalleryItem,
  intersectionSet,
  lightboxRefresh,
  axiosCall,
};

let lightbox;

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

      lightboxRefresh();
    })
    .catch(error => {
      console.log(error);
    });
}

function deleteGalleryItem() {
  document.querySelector('.gallery').outerHTML = `<ul class="gallery"></ul>`;
}

function createGalleryItem(arrayImgs) {
  if (arrayImgs.length < 1) {
    iziToast.info({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      close: true,
      timeout: 5000,
      position: 'topRight',
    });
  } else {
    const fragment = document.createDocumentFragment();
    const parentUl = document.querySelector('.gallery');

    for (const element of arrayImgs) {
      const li = document.createElement('li');
      li.classList.add('gallery-item');

      li.innerHTML = `<div class="gallery-div">
        <a class="gallery-link" href="${element.largeImageURL}">
          <img class="gallery-image" src="${element.webformatURL}" alt="${element.tags}">
        </a>
      </div>
      <div class="img-footer">
        <div class="footer-item"><p>Likes</p><p>${element.likes}</p></div>
        <div class="footer-item"><p>Views</p><p>${element.views}</p></div>
        <div class="footer-item"><p>Comments</p><p>${element.comments}</p></div>
        <div class="footer-item"><p>Downloads</p><p>${element.downloads}</p></div>
      </div>`;

      fragment.appendChild(li);
    }

    parentUl.appendChild(fragment);
  }
}

function intersectionSet() {
    mainVar.runStarted = true;
    const observerIntersection = new IntersectionObserver(
      (entries, observer) => {
        const situation = {
          // для контролю положення маркерів div class="intersection-top marker-top" і div class="intersection-bottom marker-bottom"
          markerTop: false,
          markerBottom: false,
        };
        entries.forEach(entry => {
          // для кожного контрол. елемента визначаю положення: тут, тобто isIntersecting, чи ні
          if (entry.isIntersecting) {
            console.log(entry.target.classList[1]);
            if (entry.target.classList[1] === 'marker-top') {
              situation.markerTop = true;
            } else {
              if (entry.target.classList[1] === 'marker-bottom') {
                situation.markerBottom = true;
              }
            }
          }
        });
        // визначаю куди проскролили галерею
        if (situation.markerBottom && !situation.markerTop) {
          axiosCall(mainVar.searchText, ++page, 18); // додаю записи знизу
        }
        console.log(situation);
        console.log(page);
      }
    );

    observerIntersection.observe(document.querySelector(['.marker-top']));
    observerIntersection.observe(document.querySelector(['.marker-bottom']));
}

function lightboxRefresh() {
  // Оновлюємо SimpleLightbox після додавання зображень
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
      showCounter: true,
      disableScroll: true,
      navText: ['←', '→'],
      closeText: '×',
    });
  }
}

//observerIntersection.observe(document.querySelector('.marker'));
//observerIntersection.observe(document.querySelector('.marker12'));
