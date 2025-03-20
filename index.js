import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i,S as c,a as n}from"./assets/vendor-D5mnuR-h.js";let r;function m(){document.querySelector(".gallery").outerHTML='<ul class="gallery"></ul>'}function p(t){if(t.length<1)i.info({message:"Sorry, there are no images matching your search query. Please try again!",close:!0,timeout:5e3,position:"topRight"});else{const a=document.createDocumentFragment(),o=document.querySelector(".gallery");for(const e of t){const s=document.createElement("li");s.classList.add("gallery-item"),s.innerHTML=`<div class="gallery-div">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
        </a>
      </div>
      <div class="img-footer">
        <div class="footer-item"><p>Likes</p><p>${e.likes}</p></div>
        <div class="footer-item"><p>Views</p><p>${e.views}</p></div>
        <div class="footer-item"><p>Comments</p><p>${e.comments}</p></div>
        <div class="footer-item"><p>Downloads</p><p>${e.downloads}</p></div>
      </div>`,a.appendChild(s)}o.appendChild(a),l.observe(document.querySelector([".marker-top"])),l.observe(document.querySelector([".marker-bottom"])),r?r.refresh():r=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,showCounter:!0,disableScroll:!0,navText:["←","→"],closeText:"×"})}}function d(t,a,o){n.get("https://pixabay.com/api/",{params:{key:"49309273-01bbbdbc5dd72a8afdb67bc06",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:o}}).then(e=>{p(e.data.hits)}).catch(e=>{console.log(e)})}const g=(t,a)=>{t.forEach(o=>{o.isIntersecting?console.log(`Елемент "${o.target.classList[1]}" тут`):console.log(`Елемент "${o.target.classList[1]}" пішов геть`)})},l=new IntersectionObserver(g);document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault(),m(),d(t.target.elements["search-text"].value,5,18)});
//# sourceMappingURL=index.js.map
