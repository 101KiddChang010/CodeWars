function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker === fighter1.name) {
    while (true) {
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0)
        return fighter1.name;
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0)
        return fighter2.name;
    }
  }
  else {
    while (true) {
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0)
        return fighter2.name;
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0)
        return fighter1.name;
    }
  }
}
