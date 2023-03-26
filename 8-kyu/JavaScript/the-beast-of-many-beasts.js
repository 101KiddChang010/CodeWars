function feast(beast, dish) {
  const beastFirst = beast.split('')[0];
  const dishFirst = dish.split('')[0];
  const beastLast = beast.split('')[beast.length-1];
  const dishLast = dish.split('')[dish.length-1];
  
  return (beastFirst === dishFirst && beastLast === dishLast) ? true : false;
}
