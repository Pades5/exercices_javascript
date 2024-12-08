let a = prompt("merci d'inserer un chiffre");
let b = prompt("merci d'inserer un chiffre");

function petit(a, b) {
  if (a > b) {
    return confirm("b est le plus petit chiffre");
  } else if (a == b) {
    return confirm("a et b sont egaux");
  } else {
    return confirm("a est le plus petit chiffre ");
  }
}

petit(a, b);
