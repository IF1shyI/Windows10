const wifiNames = [
    "Pretty Fly for a Wi-Fi",
    "LAN Solo",
    "The LAN Before Time",
    "Bill Wi the Science Fi",
    "Wu-Tang LAN",
    "It Hurts When IP",
    "Router? I Hardly Know Her!",
    "Drop It Like It's Hotspot",
    "Hide Yo Kids, Hide Yo Wi-Fi",
    "TellMyWiFiLoveHer",
    "I Believe Wi Can Fi",
    "No More Mr. Wi-Fi",
    "404 Network Unavailable",
    "The Fast and the Wi-Fi",
    "LAN of the Free",
    "FBI Surveillance Van",
    "NSA Listening Post",
    "Mom, Click Here for Internet",
    "Nacho Wi-Fi",
    "Winternet Is Coming",
    "The Password is 1234",
    "Loading… Please Wait",
    "You Shall Not Pass(word)",
    "Virus Distribution Center",
    "Click and Die",
    "Drop Bear Free Zone",
    "I’m Under Your Bed",
    "Skynet Global Defense",
    "Connecting…",
    "Definitely Not a Trap",
    "Ye Olde Internet",
    "Marty, This is the Wi-Fi!",
    "WhySoSSIDious",
    "Trust Me, I'm a Router",
    "Clever Wi-Fi Name",
    "LANaconda",
    "IP Freely",
    "Wi-Fight the Feeling?",
    "Slow Connection, Try Later",
    "Searching...",
    "Reboot and Try Again",
    "Look Ma, No Wires!",
    "We Have Internet!",
    "Router McRouterFace"
];
const networkStrength = ["\uEC3C", "\uEC3D", "\uEC3E", "\uEC3F"];

const names = document.querySelectorAll(".network-name .name");
const icons = document.querySelectorAll(".network .icon");


export function generateNetworkNames() {
    names.forEach((name) => {
        let randomIndex = Math.floor(Math.random() * wifiNames.length);
        name.textContent = wifiNames[randomIndex];
    });

    icons.forEach((icon) => {
        let randomIndex = Math.floor(Math.random() * networkStrength.length);
        icon.textContent = networkStrength[randomIndex];
    });
}