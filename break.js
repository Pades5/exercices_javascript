let sum = 0;

while (true) {
  let value = +prompt("Entrez un nombre", "");

  if (!value) break; // (*)

  sum += value;
}
alert("Sum: " + sum);
