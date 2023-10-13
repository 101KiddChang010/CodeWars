function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  dolphin === true ? sharkSpeed /= 2 : null;
  
  while(true) {
    pontoonDistance -= youSpeed; 
    if (pontoonDistance <= 0) 
      return "Alive!";
    
    sharkDistance -= sharkSpeed;
    if (sharkDistance <= 0) 
      return "Shark Bait!";
  }
}
