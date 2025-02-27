let count = 0;
let startTime = Date.now();
let batteryfull = false;
const time_left = document.querySelector(".time-left");
const mode_text = document.querySelector(".mode-text");

export function charge() {
    const icons = document.querySelectorAll(".battery-tagg");
    const percentage = document.querySelector(".percentage");
    powerModeCheck();
    
    count = indexcounter();

    let text = chargeIcon(count);

    if (batteryfull){
        text = "\uE83F"
        time_left.style.display = "none"
    }

    icons.forEach((icon) => {
        if (icon) {
        icon.textContent = text;
        }
    });

    const currpercent = Math.round(CalculatePercentage());

    percentage.textContent = `${currpercent} %`
}

function chargeIcon(index) {
    const icons = ["\uE85B", "\uE85C", "\uE85D", "\uE85E", "\uE85F", "\uE860", "\uE861", "\uE862", "\uE83E"];

    return icons[index]
}

export function indexcounter(){
    ++count

    if (count > 8){
        count = 0;
    }
    
    return count;
    
}

function CalculatePercentage(){
    if (batteryfull) return;
    let timeSpent = (Date.now() - startTime) / 1000;
    const fullChargeTime = 1 * ( 60 * 60 )

    const percentage = (timeSpent / fullChargeTime) * 100

    if (percentage >= 75) {
        time_left.textContent = "15 min left";
    } else if (percentage >= 50) {
        time_left.textContent = "30 min left";
    } else if (percentage >= 25) {
        time_left.textContent = "45 min left";
    }


    if (percentage > 100) batteryfull = true;

    return percentage
}

function powerModeCheck(){
    const power_mode = document.getElementById("power-mode").value;
    const base = "Power mode (Battery):"
    if (power_mode == 3){
        mode_text.textContent = `${base} Best performance`;
    }
    if (power_mode == 2){
        mode_text.textContent = `${base} Better performance`;
    }
    if (power_mode == 1){
        mode_text.textContent = `${base} Better battery`;
    }
    if (power_mode == 0){
        mode_text.textContent = `${base} Power saving mode`
    }
}