/*for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // Et si nous voulons sortir d'ici à Done (ci-dessous) ?
  }
}

alert("Done!");*/
// le programme continue jusqu' a que J et I soit égal à 2 meme si le use n 'entre pas de valeur

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");
    if (!input) break outer;
  }
}

alert("Done!");
// ici le use doit rentrer des chiffres ou autres , si il y a une valeur vide le break s 'active , il nous sort des boucles et affiche Done!
