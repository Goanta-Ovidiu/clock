function updateTime() {
  const d = new Date();
  const h = formatNumberString(d.getHours());
  const m = formatNumberString(d.getMinutes());
  const s = formatNumberString(d.getSeconds());

  const sec = d.getSeconds();
  const min = d.getMinutes();
  const hours = d.getHours();
  const sun = d.getHours();
  const moon = d.getHours();
  const secondsEl = document.querySelector(".seconds");
  const minutesEl = document.querySelector(".minutes");
  const hoursEl = document.querySelector(".hours");
  const sunny = document.querySelector(".sun");
  const moond = document.querySelector(".moon");

  sunny.style.setProperty("--sun", sun * 30 + "deg");
  moond.style.setProperty("--moon", moon * 30 + "deg");
  secondsEl.style.setProperty("--seconds", sec * 6 + "deg");
  minutesEl.style.setProperty("--minutes", min * 6 + "deg");
  hoursEl.style.setProperty("--hours", hours * 30 + "deg");
  sunChangeMoon(moon, moond);
  sunChangeSun(sun, sunny);
}

function formatNumberString(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

function sunChangeMoon(e, x) {
  const stars = document.querySelector(".stars");
  if (e >= 18 || e <= 7) {
    x.style.display = "block";
    stars.style.display = "visible";
  } else {
    stars.style.display = "none";
    x.style.display = "none";
  }
}
function sunChangeSun(e, x) {
  const bodyBackground = document.querySelector("body");
  const cloud = document.querySelector(".cloud");
  const cloudDown = document.querySelector(".cloud_down");
  if (e <= 18 && e >= 7) {
    x.style.display = "block";
    bodyBackground.style.backgroundColor = "blue";
    cloud.style.display = "visible";
    cloudDown.style.display = "visible";
  } else {
    x.style.display = "none";
    cloud.style.display = "none";
    cloudDown.style.display = "none";
  }
}
updateTime();

setInterval(updateTime, 1000);
