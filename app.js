const secondOnes = document.querySelector(".second-ones");
const secondTens = document.querySelector(".second-tens");
const minuteOnes = document.querySelector(".minute-ones");
const minuteTens = document.querySelector(".minute-tens");
const hourOnes = document.querySelector(".hour-ones");
const hourTens = document.querySelector(".hour-tens");
setInterval(() => {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondsOnesAngle =
    36 *
    (String(seconds).length === 1 ? String(seconds)[0] : String(seconds)[1]);
  const secondsTensAngle =
    36 * (String(seconds).length === 1 ? 0 : String(seconds)[0]);
  const minuteOnesAngle =
    36 *
    (String(minutes).length === 1 ? String(minutes)[0] : String(minutes)[1]);
  const minuteTensAngle =
    36 * (String(minutes).length === 1 ? 0 : String(minutes)[0]);
  const hourOnesAngle =
    36 * (String(hours).length === 1 ? String(hours)[0] : String(hours)[1]);
  const hourTensAngel =
    36 * (String(hours).length === 1 ? 0 : String(hours)[0]);
  secondOnes.style.transform = `rotateX(${secondsOnesAngle}deg)`;
  secondTens.style.transform = `rotateX(${secondsTensAngle}deg)`;
  minuteOnes.style.transform = `rotateX(${minuteOnesAngle}deg)`;
  minuteTens.style.transform = `rotateX(${minuteTensAngle}deg)`;
  hourOnes.style.transform = `rotateX(${hourOnesAngle}deg)`;
  hourTens.style.transform = `rotateX(${hourTensAngel}deg)`;
}, 1000);
