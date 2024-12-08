let a = prompt("merci d'inserer un chiffre", "");
let b = prompt("merci d'inserer un chiffre", "");

function pow(a, b) {
  let total = a;
  for (let resultat = 1; resultat < b; resultat++) {
    total = total * a;
  }
  return total;
}

alert(pow(a, b));

s;
