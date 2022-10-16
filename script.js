const darkIcon = document.getElementById("darkmode");
const brightness = document.getElementById("brightness");
const header = document.getElementById("header");
const root = document.querySelector(":root");
const airplane = document.getElementById("airplane");
const wifi = document.getElementById("wifi");

function toggleAirplaneMode() {
  wifi.classList.toggle("fa-solid");
  wifi.classList.toggle("fa-wifi");
  airplane.classList.toggle("fa-solid");
  airplane.classList.toggle("fa-plane-up");
}

brightness.onclick = () => {
  root.classList.toggle("dim");
};

darkIcon.onclick = function () {
  document.body.classList.toggle("darktheme");
};

function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let session = document.getElementById("session");

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : "" + minutes;
}
setInterval(displayTime, 10);
