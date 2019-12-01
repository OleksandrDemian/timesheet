const DAYS = [
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
    "Domenica"
];

function toDay(day) {
    if(day === 0){
        day = 7;
    } else if(day > 6){
        throw new Error("Invalid day");
    }

    return day;
}

export function getDaysCount(month, year) {
    return new Date(year, month+1, 0).getDate();
}

export function getDays(month, year) {
    let days = getDaysCount(month, year);
    let ret = [];

    for(let d = 1; d <= days; d++){
        let date = new Date(year, month, d);
        let day = toDay(date.getDay());
        ret.push({
            inMonth: d,
            inWeek: day,
            name: DAYS[day-1],
            date: date
        });
    }

    return ret;
}

export function getCurrentMonthDays(){
    let date = new Date();
    let m = date.getMonth();
    let y = date.getFullYear();

    return getDays(m, y);
}