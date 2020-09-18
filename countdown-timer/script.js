const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");

const newYear = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = Math.round((newYearsDate - currentDate) / 1000);
  
  const days = Math.round(totalSeconds/3600/24);
  const hours = Math.round(totalSeconds/3600) % 24;
  const minutes = Math.round(totalSeconds/60) % 60;
  const seconds = Math.round(totalSeconds) % 60;
  // console.log(`${days}: ${hours}: ${minutes}: ${seconds}`);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);

