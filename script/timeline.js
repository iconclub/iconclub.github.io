(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
    var date = new Date();
    
    const toShortDate = (date) => {
      let regex = /^\d{2}\/\d{2}\/\d{4}/;
      if ( date.match(regex) ) {
        let parts = date.split("/");
        return Date.parse(`${parts[1]}/${parts[0]}/${parts[2]}`);
      }
      return false;
    }
    
    items.forEach((item) => {
      let timeContent = item.querySelector("div time").textContent;
      let timeDates = timeContent.split(" - ");
      let beginDate = toShortDate(timeDates[0])
      let endDate = toShortDate(timeDates[1])
      if ( beginDate && endDate ) {
        if ( date.getTime() > beginDate && date.getTime() < endDate ) {
          item.querySelector("div").classList.add("gradient-border");
        }
      }
    })
  
    // check if an element is in viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);


  
})();


