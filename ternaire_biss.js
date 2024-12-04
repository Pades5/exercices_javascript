var year = 2017;
var annee =
  (year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? "true" : "false";

alert(annee);
