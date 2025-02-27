import { currentTime, currentDate } from "./date_time.js"
import { charge } from "./charging.js"

const apps = document.querySelectorAll(".taskbar-icon")



apps.forEach((app) => {
    app.addEventListener("click", (e) => {
        console.log(app.classList[1]);
    });
});

function updateDateTime(){
    const time = document.querySelector(".time-taskbar");
    const date = document.querySelector(".date-taskbar");
    let timenow = currentTime();
    time.textContent = `${timenow["hours"]}:${timenow["minutes"]}`

    let datenow = currentDate();
    date.textContent = `${datenow["year"]}-${datenow["month"]}-${datenow["day"]}`
}

setInterval(updateDateTime, 1000);

setInterval(charge, 500);

updateDateTime();