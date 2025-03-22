import {mainVar, createGalleryItem, deleteGalleryItem, intersectionSet, lightboxRefresh,axiosCall,  page, } from './render-functions.js';



//*********   Start  ********************************************

intersectionSet();


document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  deleteGalleryItem();
  mainVar.searchText=event.target.elements['search-text'].value;
  axiosCall(mainVar.searchText, page, 18);
});

//***************************************************** 

