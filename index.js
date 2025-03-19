import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as s,S as i,a as n}from"./assets/vendor-D5mnuR-h.js";let r;function d(){document.querySelector(".gallery").outerHTML='<ul class="gallery"></ul>'}function c(e){if(e.length<1)s.info({message:"Sorry, there are no images matching your search query. Please try again!",close:!0,timeout:5e3,position:"topRight"});else{const o=document.createDocumentFragment(),a=document.querySelector(".gallery");for(const t of e){const l=document.createElement("li");l.classList.add("gallery-item"),l.innerHTML=`<div class="gallery-div">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}">
        </a>
      </div>
      <div class="img-footer">
        <div class="footer-item"><p>Likes</p><p>${t.likes}</p></div>
        <div class="footer-item"><p>Views</p><p>${t.views}</p></div>
        <div class="footer-item"><p>Comments</p><p>${t.comments}</p></div>
        <div class="footer-item"><p>Downloads</p><p>${t.downloads}</p></div>
      </div>`,o.appendChild(l)}a.appendChild(o),r?r.refresh():r=new i(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,disableScroll:!0,navText:["←","→"],closeText:"×"})}}function m(e,o,a){n.get("https://pixabay.com/api/",{params:{key:"49309273-01bbbdbc5dd72a8afdb67bc06",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}}).then(t=>{c(t.data.hits)}).catch(t=>{console.log(t)})}let p=new MutationObserver(e=>{console.log(e[0].type),console.log(e[0].target),console.log(e[0].addedNodes.length>0||e[0].removedNodes.length>0?"Added  Removed":e[0].removedNodes.length>0?"Remove":e[0].addedNodes.length>0?"Added":"")});p.observe(document.querySelector(".for-mutation-observer"),{childList:!0,subtree:!0});document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault(),d(),m(e.target.elements["search-text"].value,5,39)});
//# sourceMappingURL=index.js.map
