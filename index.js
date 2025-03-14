import{c as e}from"./assets/1-gallery-BGHeGOac.js";import{a as i}from"./assets/vendor-FG0iIeJq.js";const t={images:[]};function o(){i.get("https://pixabay.com/api/",{params:{key:"49309273-01bbbdbc5dd72a8afdb67bc06",q:"mountain+alpinism",image_type:"photo",page:2,per_page:30}}).then(a=>{t.images=a.data.hits,e(t.images)}).catch(a=>{console.log(a)})}o();
//# sourceMappingURL=index.js.map
