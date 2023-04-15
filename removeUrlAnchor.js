//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  let arr = [];
  let item = url.indexOf('#');
  if(url.includes('#')){
      for(let i=0; i < item; i++){
      arr.push(url[i])};
      return arr.join('');
  }else{
    return url;
  };
};