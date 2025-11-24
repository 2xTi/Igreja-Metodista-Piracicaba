let badgeCounter = 0;

function incrementCounter() {
  badgeCounter++;
  document.getElementById("badge-counter").innerHTML = badgeCounter;
}

function resetCounter() {
  badgeCounter = 0;
  document.getElementById("badge-counter").innerHTML = badgeCounter;
}
