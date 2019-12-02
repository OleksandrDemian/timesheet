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

/**
 * Parses days on week numbering from (sun-sat / 0 - 6) to (mon - sun / 1 - 7)
 * 
 * @param {number} day
 * @returns the number of the day in the week (1 to 7)
 * @throws Error if day > 6
 */
function parseSunSatToMonSunWeekNumbering(day) {
    if(day === 0){
        day = 7;
    } else if(day > 6){
        throw new Error("Invalid day");
    }

    return day;
}

/**
 * @param {number} month number (1 to 12) of the month
 * @param {number} year needed if it's a year when february has 29 days
 * @returns number of days for the month
 */
export function getMonthNumberOfDays(month, year) {
    return new Date(year, month+1, 0).getDate();
}

/**
 * Retrieves every day of the month information and puts it in an ordered array
 * 
 * @param {number} month desired month
 * @param {number} year desired year
 * @return an ordered array of Day for the month
 */
export function getDays(month, year) {
    let days = getMonthNumberOfDays(month, year);
    let ret = [];

    for(let d = 1; d <= days; d++){
        let date = new Date(year, month, d);
        let day = parseSunSatToMonSunWeekNumbering(date.getDay());
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