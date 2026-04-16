function updateTime() {
  const el = document.getElementById("time");
  if (el) {
    el.textContent = Date.now();
  }
}

updateTime();
setInterval(updateTime, 1000);