export function currentTime(){
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return {"hours":hours, "minutes":minutes, "seconds":seconds}
}

export function currentDate(){
    const currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    month = month.toString().padStart(2, '0')
    day = day.toString().padStart(2, '0')

    return {"year":year, "month":month, "day":day}
}