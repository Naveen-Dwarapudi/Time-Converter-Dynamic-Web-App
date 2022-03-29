let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

convertBtnEl.addEventListener("click", function() {
    let hours = hoursInputEl.value;
    let minutes = minutesInputEl.value;
    if (hours === "") {
        errorMsgEl.textContent = "please Enter Hours Input";
    } else if (minutes === "") {
        errorMsgEl.textContent = "please Enter Minutes Input";
    } else {
        hours = parseInt(hours) * 3600;
        minutes = parseInt(minutes) * 60;
        timeInSecondsEl.classList.add("time-in-seconds");
        timeInSecondsEl.textContent = hours + minutes + "s";
        errorMsgEl.textContent = "";
    }
});