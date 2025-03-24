import {mainVar, createGalleryItem, deleteGalleryItem, intersectionSet, lightboxRefresh,axiosCall, } from './render-functions.js';



//*********   Start  ********************************************

intersectionSet();


document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  deleteGalleryItem();
  mainVar.searchText=event.target.elements['search-text'].value;
  mainVar.direction = 'toBottom';
  mainVar.carrentPage = 1;
  axiosCall(mainVar.searchText, mainVar.carrentPage, mainVar.pageLen);
});

//***************************************************** 

