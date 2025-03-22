import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as c,i as m,S as p}from"./assets/vendor-D5mnuR-h.js";let l=1;const s={searchText:"",runStarted:!1};let i;function n(t,o,r){c.get("https://pixabay.com/api/",{params:{key:"49309273-01bbbdbc5dd72a8afdb67bc06",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:r}}).then(e=>{u(e.data.hits),f()}).catch(e=>{console.log(e)})}function d(){document.querySelector(".gallery").outerHTML='<ul class="gallery"></ul>'}function u(t){if(t.length<1)m.info({message:"Sorry, there are no images matching your search query. Please try again!",close:!0,timeout:5e3,position:"topRight"});else{const o=document.createDocumentFragment(),r=document.querySelector(".gallery");for(const e of t){const a=document.createElement("li");a.classList.add("gallery-item"),a.innerHTML=`<div class="gallery-div">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        </a>
      </div>
      <div class="img-footer">
        <div class="footer-item"><p>Likes</p><p>${e.likes}</p></div>
        <div class="footer-item"><p>Views</p><p>${e.views}</p></div>
        <div class="footer-item"><p>Comments</p><p>${e.comments}</p></div>
        <div class="footer-item"><p>Downloads</p><p>${e.downloads}</p></div>
      </div>`,o.appendChild(a)}r.appendChild(o)}}function g(){s.runStarted=!0;const t=new IntersectionObserver((o,r)=>{const e={markerTop:!1,markerBottom:!1};o.forEach(a=>{a.isIntersecting&&(console.log(a.target.classList[1]),a.target.classList[1]==="marker-top"?e.markerTop=!0:a.target.classList[1]==="marker-bottom"&&(e.markerBottom=!0))}),e.markerBottom&&!e.markerTop&&n(s.searchText,++l,18),console.log(e),console.log(l)});t.observe(document.querySelector([".marker-top"])),t.observe(document.querySelector([".marker-bottom"]))}function f(){i?i.refresh():i=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,disableScroll:!0,navText:["←","→"],closeText:"×"})}g();document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault(),d(),s.searchText=t.target.elements["search-text"].value,n(s.searchText,l,18)});
//# sourceMappingURL=index.js.map
