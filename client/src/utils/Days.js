import Day from "../models/Day";

const DAYS = [
    { name: "Lunedi", working: true },
    { name: "Martedi", working: true },
    { name: "Mercoledi", working: true },
    { name: "Giovedi", working: true },
    { name: "Venerdi", working: true },
    { name: "Sabato", working: false },
    { name: "Domenica", working: false }
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
        let appDay = DAYS[day-1];

        ret.push(new Day({
            inMonth: d,
            inWeek: day,
            name: appDay.name,
            working: appDay.working,
            date: date
        }));
    }

    return ret;
}

export function getCurrentMonthDays(){
    let date = new Date();
    let m = date.getMonth();
    let y = date.getFullYear();

    return getDays(m, y);
}