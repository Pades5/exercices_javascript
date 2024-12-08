let age = prompt("entrez votre age");
function checkAge(age) {
  return age > 18 ? true : confirm("did parents allow you ? ");
}

/*function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}*/
checkAge(age);

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}*/
