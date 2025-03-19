import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   overlayOpacity: 0.8, // Прозорість фону
//     showCounter: true, // Відображення лічильника зображень
//     disableScroll: true, // Вимкнення прокрутки сторінки при відкритті лайтбоксу
//     navText: ["←", "→"], // Налаштування стрілок навігації
//     closeText: "×", // Кнопка закриття
// });

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    showCounter: true, // Відображення лічильника зображень
    disableScroll: true, // Вимкнення прокрутки сторінки при відкритті лайтбоксу
    navText: ['←', '→'], // Налаштування стрілок навігації
    closeText: '×', // Кнопка закриття
  });
});

export function createGalleryItem(arrayImgs) {
  const fragment = document.createDocumentFragment();
  const perentUl = document.querySelector('.gallery');

  for (const element of arrayImgs) {
    const {
      webformatURL: smallImage,
      largeImageURL: largeImage,
      views: imageDescription,
    } = element;

    //   створив li

    const liChaild = document.createElement('li');
    liChaild.classList.add('gallery-item');
    liChaild.style.maxWidth = '360px';
    liChaild.style.maxHeight = '200px';
    liChaild.style.overflow = 'hidden';
    liChaild.style.transition = 'transform 0.3s ease-in-out';

    const aChaild = document.createElement('a');
    aChaild.classList.add('gallery-link');
    aChaild.href = largeImage;

    const imgChaild = document.createElement('img');
    imgChaild.classList.add('gallery-image');
    imgChaild.src = smallImage;
    imgChaild.alt = imageDescription;
    imgChaild.style.maxWidth = '100%';
    imgChaild.style.objectFit = 'cover';

    aChaild.appendChild(imgChaild);
    liChaild.appendChild(aChaild);
    fragment.appendChild(liChaild);
  }

  perentUl.appendChild(fragment);
}
