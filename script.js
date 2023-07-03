//your JS code here. If required.
function updateTime() {
let timer=document.getElementById("timer")
let date = new Date();
timer.innerHTML=date.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);
