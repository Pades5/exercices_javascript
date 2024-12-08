let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function doubleValeNum(obj) {
  for (let keys in menu) {
    if (typeof menu[keys] === "number") menu[keys] *= 2;
  }
}

doubleValeNum(menu);
alert(menu.width);
alert(menu.height);
alert(menu.title);
