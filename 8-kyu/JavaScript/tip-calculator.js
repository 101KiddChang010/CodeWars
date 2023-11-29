function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  
  switch (rating) {
      case ("excellent"):
        return Math.ceil(amount * 1.20 - amount);
      case ("great"):
        return Math.ceil(amount * 1.15 - amount);
      case ("good"):
        return Math.ceil(amount * 1.10 - amount);
      case ("poor"):
        return Math.ceil(amount * 1.05 - amount);
      case ("terrible"):
        return 0;
      default:
        return "Rating not recognised";
  }
}
