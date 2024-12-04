var year = 2016;
if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
  alert("il s agit d une annee bissextile");
} else {
  alert("il ne s agit pas d une annee bissextile");
}
