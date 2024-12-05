/*for (let i = 0; i < 10; i++) {
  // si vrai, saute le reste du corps
  if (i % 2 == 0) continue;

  alert(i); // 1, ensuite 3, 5, 7, 9
}
*/
/*for (let i = 0; i < 10; i++) {
  if (i % 2) {
    //ici cette condition indique i % 2 == 0
    alert(i);
  }
}*/
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    alert(i);
  } else {
    continue;
  }
}
