import { currentTime, currentDate } from "./date_time.js"
import { charge } from "./charging.js"
import { generateNetworkNames } from "./network.js"

const apps = document.querySelectorAll(".taskbar-icon")

// Menus

const battery_menu = document.querySelector(".batt_men_container");
const network_menu = document.querySelector(".netw_menu_container")
let battery_menu_open = false;
let network_window_open = false;



apps.forEach((app) => {
    app.addEventListener("click", (e) => {
        console.log(app.classList[1]);
        if (app.classList[1] == "battery-icon"){
            if (battery_menu_open){
                battery_menu.style.display  = "none"
                battery_menu_open = false
            } else{
                battery_menu.style.display  = "grid"
                battery_menu_open = true
            }

        }
        if (app.classList[1] == "wifi-icon"){
            if (network_window_open){
                network_menu.style.display = "none"
                network_window_open = false
            } else{
                network_menu.style.display = "grid"
                network_window_open = true
            }
        }
    });
});


// Charging

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


// Network

const networks = document.querySelectorAll(".networks_container .network");
const connected_texts = document.querySelectorAll(".network-name .connected");
const connectbtns = document.querySelectorAll(".extended-properties .connect");
const networkicon = document.querySelector(".wifi-icon span")
const activenetworksicon = document.querySelectorAll(".network span");
const networkbtns = document.querySelectorAll(".network-btns-container .btn");
const networks_container = document.querySelector(".networks_container");
let lastStateIcon = "";

// Hantera klick på nätverk
networks.forEach((network) => {
    network.addEventListener("click", () => {
        networks.forEach((net) => net.classList.remove("extended"));
        network.classList.toggle("extended");
    });
});

// Hantera klick på "Connect"-knappar
connectbtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const selectedNetwork = networks[index];

        // Om nätverket redan är aktivt, koppla från
        if (selectedNetwork.classList.contains("active-network")) {
            selectedNetwork.classList.remove("active-network");
            if (connected_texts[index]) connected_texts[index].textContent = "";
            btn.textContent = "Connect";
            networkicon.textContent = "\uEB55";
        } else {
            // Koppla från alla andra nätverk och anslut till det valda
            networks.forEach((net, i) => {
                net.classList.remove("active-network");
                if (connected_texts[i]) connected_texts[i].textContent = "";
                connectbtns[i].textContent = "Connect";
            });

            selectedNetwork.classList.add("active-network");
            if (connected_texts[index]) connected_texts[index].textContent = "Connected, secure";
            btn.textContent = "Disconnect";
            networkicon.textContent = activenetworksicon[index].textContent;
        }
    });
});

networkbtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        if (index === 1 && btn.classList.contains("active-btn")){
            btn.classList.remove("active-btn");
            networkbtns[0].classList.add("active-btn");
            networkicon.textContent = lastStateIcon;
        } else{
            btn.classList.toggle("active-btn");
        }

        if (!networkbtns[0].classList.contains("active-btn")) {
            networks_container.style.display = "none";
        } else {
            networks_container.style.display = "flex";

            if (networkbtns[1].classList.contains("active-btn")) {
                networkbtns[0].classList.remove("active-btn");
                networkbtns[2].classList.remove("active-btn");
            }
        }

        // Om den andra knappen är aktiv, stänga nätverksbehållaren
        if (networkbtns[1].classList.contains("active-btn")) {
            networks_container.style.display = "none";
            lastStateIcon = networkicon.textContent
            networkicon.textContent = "\uEB55";
        }
    });
});

generateNetworkNames();
networkicon.textContent = activenetworksicon[0].textContent;