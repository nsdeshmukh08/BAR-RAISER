export const debounce = function(callback, timer){
  let timeOut;
  return function(...agrs) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callback.apply(this, agrs);
    }, timer);
  }

}
