function domainName(url){
  let result;
  
  if (url.includes('www')) {
    return url.split('.', 2).pop();
  }
  else if (url.includes('//')) { 
    return url.split('//', 2).pop().split('.').shift();
  }
  else {
    if (url.includes('.')) {
      return url.split('.').shift();
    }
    return url
  }
}
