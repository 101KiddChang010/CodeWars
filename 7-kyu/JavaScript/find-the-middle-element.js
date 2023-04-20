function gimme (triplet) {
  return triplet.findIndex(e => e === [...triplet].sort((a,b) => a-b)[1]);
}
