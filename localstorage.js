window.localStorage.setItem(`${city1}`);
window.localStorage.setItem(`${city2}`);
window.localStorage.setItem(`${city3}`);
window.localStorage.setItem(`${city4}`);

for (var i = 0; i < localStorage.length; i++) {
  var initial = localStorage.key(i);
  var score = localStorage.getItem(initial);

  console.log(initial + ": " + score);
}
