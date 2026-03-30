function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function goToPage(page) {
  window.location.replace(page);
};