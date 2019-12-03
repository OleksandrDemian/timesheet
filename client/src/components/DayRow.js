import React from "react";

function DayRow ({ day, onUpdate, checkDay }) {
    const comessa = day.comessa;

    const onChange = e => {
        const target = e.target;
        const prop = target.name;
        const value = target.value;
        const inMonth = day.inMonth;

        onUpdate({ prop, value, inMonth });
    };

    const onCheckChange = e => {
        checkDay(day.inMonth, e.target.checked);
    }

    const dayProps = {};
    if(!day.working){
        dayProps.className = "text-danger";
    }

    return (
        <tr>
            <td>
                <input type="checkbox" onChange={onCheckChange} checked={comessa.checked} />
            </td>
            <td {...dayProps}>
                {day.name}, {day.inMonth}
            </td>
            <td>
                <input type="time" className="form-control" onChange={onChange} name="oraInizio" value={comessa.oraInizio} />
            </td>
            <td>
                <input type="time" className="form-control" onChange={onChange} name="oraFine" value={comessa.oraFine} />
            </td>
            <td>
                <input type="time" className="form-control" onChange={onChange} name="oreLavorate" value={comessa.oreLavorate} />
            </td>
            <td>
                <input type="time" className="form-control" onChange={onChange} name="oreStraordinarie" value={comessa.oreStraordinarie} />
            </td>
        </tr>
    );
}

export default DayRow;