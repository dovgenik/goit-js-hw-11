// ***********************  MutationObserver  ******************************************************
// відслідковує мутації і щось виконає, отримуючі інф. про мутацію
let mutationObserver = new MutationObserver(mutationRecords => {
    if (mutationRecords[0].addedNodes.length > 0) { // додані записи до контролюємого об'єкта
    const markerObj= document.querySelector('.marker12');
      console.log(`Об'єкт з маркером "${markerObj}"`);
      observerIntersection.observe(markerObj);
    }
    //console.log(mutationRecords);// об'єкт мутації
    //console.log(mutationRecords[0].type); // тип мутації
    console.log(mutationRecords[0].addedNodes[5].className); 
  });
  // вказує на чому відслідковувати мутації раніше створеному observer = new MutationObserver()
  mutationObserver.observe(document.querySelector('.for-mutation-observer'), {
    childList: true,
    subtree: true,
  });




  //**********************************  IntersectionObserver  // поява обєкта в полі видимості*************************************************
const callbackIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Елемент "${entry.target.classList[1]}" тут`);
      } else {
        console.log(`Елемент "${entry.target.classList[1]}" пішов геть`);
      };
    })
  }

  const observerIntersection = new IntersectionObserver(callbackIntersection);  //, options
observerIntersection.observe(document.querySelector('.marker'));
//observerIntersection.observe(document.querySelector('.marker12'));