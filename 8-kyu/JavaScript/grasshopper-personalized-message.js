function greet (name, owner) {
  return `Hello ${ name !== owner ? "guest" : "boss"}`;
}
