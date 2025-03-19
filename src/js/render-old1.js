import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export { createGalleryItem };
let lightbox;

function createGalleryItem(arrayImgs) {
  const fragment = document.createDocumentFragment();
  const parentUl = document.querySelector('.gallery');

  for (const element of arrayImgs) {
    const {
      webformatURL: smallImage,
      largeImageURL: largeImage,
      tags: imageDescription,
      likes: likes,
      views: views,
      comments: comments,
      downloads: downloads,
    } = element;

// const element = "<li> <p>І ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами </p> </li>";
// document.querySelector("ul").insertAdjacentHTML('beforeend',element);

    const liChild = document.createElement('li');
    liChild.classList.add('gallery-item');

    const liContainerA = document.createElement('div');
    liContainerA.classList.add('gallery-div');
    liContainerA.style.maxWidth = '100%'; //'360px'
    liContainerA.style.maxHeight = '200px';
    liContainerA.style.overflow = 'hidden';
    liContainerA.style.transition = 'transform 0.3s ease-in-out';

    const aChild = document.createElement('a');
    aChild.classList.add('gallery-link');
    aChild.href = largeImage;

    const imgChild = document.createElement('img');
    imgChild.classList.add('gallery-image');
    imgChild.src = smallImage;
    imgChild.alt = imageDescription;
    imgChild.style.maxWidth = '100%';
    imgChild.style.objectFit = 'cover';

    const divChild = document.createElement('div');
    divChild.classList.add('img-footer');

    const containerLikes = document.createElement('div');
    containerLikes.classList.add('footer-item');
    const containerViews = document.createElement('div');
    containerViews.classList.add('footer-item');
    const containerComments = document.createElement('div');
    containerComments.classList.add('footer-item');
    const containerDownloads = document.createElement('div');
    containerDownloads.classList.add('footer-item');


    const nameLikes = document.createElement('p');
    const nameViews = document.createElement('p');
    const nameComments = document.createElement('p');
    const nameDownloads = document.createElement('p');

    const countLikes = document.createElement('p');
    const countViews = document.createElement('p');
    const countComments = document.createElement('p');
    const countDownloads = document.createElement('p');

    nameLikes.textContent = 'Likes';
    countLikes.textContent = likes;
    nameViews.textContent = 'Views';
    countViews.textContent = views;
    nameComments.textContent = 'Comments';
    countComments.textContent = comments;
    nameDownloads.textContent = 'Downloads';
    countDownloads.textContent = downloads;

    containerLikes.appendChild(nameLikes);
    containerLikes.appendChild(countLikes);
    containerViews.appendChild(nameViews);
    containerViews.appendChild(countViews);
    containerComments.appendChild(nameComments);
    containerComments.appendChild(countComments);
    containerDownloads.appendChild(nameDownloads);
    containerDownloads.appendChild(countDownloads);


    aChild.appendChild(imgChild);
    liContainerA.appendChild(aChild);
    liChild.appendChild(liContainerA);

    divChild.appendChild(containerLikes);
    divChild.appendChild(containerViews);
    divChild.appendChild(containerComments);
    divChild.appendChild(containerDownloads);

    liChild.appendChild(divChild);

    fragment.appendChild(liChild);
  }

  parentUl.appendChild(fragment);

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
