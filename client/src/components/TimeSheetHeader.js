import React from "react";
import { getMonthName } from "../utils/Months";

function TimeSheetHeader ({ month, year }){
    const monthName = getMonthName(month);
    return <h1>{monthName}, {year}</h1>;
}

export default TimeSheetHeader;