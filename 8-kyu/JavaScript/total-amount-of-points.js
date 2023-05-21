function points(games) {
  const xTeam = games.map(e => +(e.slice(0,1)));
  const yTeam = games.map(e => +(e.slice(2,3)));
  let counter = 0
  
  for (let x = 0; x < games.length; x++) {
    if (xTeam[x] > yTeam[x]) 
      counter += 3;
    else if (xTeam[x] === yTeam[x]) 
      counter += 1;
  }
  
  return counter;
}
