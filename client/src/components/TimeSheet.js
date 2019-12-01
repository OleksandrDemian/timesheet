import React from "react";
import {getCurrentMonthDays} from "../utils/Days";

function TimeSheet() {
    let days = getCurrentMonthDays();
    for(let i = 0; i < days.length; i++){
        console.log(days[i]);
    }

    return <h1>Timesheet</h1>
}

export default TimeSheet;