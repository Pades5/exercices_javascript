let login = prompt("merci de saisir votre log");
if (login == null) {
  alert("cancel");
} else if (login !== "admin") {
  alert("i don't know you");
} else if (login == "admin") {
  let mdp = prompt("entrez votre mot de passe svp");
  if (mdp == null) {
    alert("cancel");
  } else if (mdp !== "TheMaster") {
    alert("wrong password");
  } else if (mdp == "TheMaster") alert("Welcome!");
}
