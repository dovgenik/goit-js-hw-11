import {mainVar, createGalleryItem, deleteGalleryItem,  lightboxRefresh, axiosAfterTthenCall,} from './js/render-functions.js';
import {axiosCall, } from './js/pixabay-api.js';


//*********   Start  ********************************************

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  deleteGalleryItem();
  
  axiosCall(event.target.elements['search-text'].value, 1, 42, axiosAfterTthenCall);
});

//***************************************************** 

