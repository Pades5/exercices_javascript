label: for (let n = 2; n < 10; n++) {
  for (let m = 2; m < n; m++) {
    if (n % m == 0) {
      continue label;
    }
  }
  alert(n);
}
