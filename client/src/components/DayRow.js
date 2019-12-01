import React from "react";

function DayRow ({ day, onUpdate }) {
    const comessa = day.comessa;

    const onChange = e => {
        const target = e.target;
        const prop = target.name;
        const value = target.value;

        onUpdate({ prop, value });
    };

    const onCheckChange = e => {
        comessa.checked = e.target.checked;
    }

    return (
        <tr>
            <td>
                <input type="checkbox" onChange={onCheckChange} checked={comessa.checked} />
            </td>
            <td>
                {day.name}, {day.inMonth}
            </td>
            <td>
                <input type="text" className="form-control" onChange={onChange} name="oraInizio" value={comessa.oraInizio} />
            </td>
            <td>
                <input type="text" className="form-control" onChange={onChange} name="oraFine" value={comessa.oraFine} />
            </td>
            <td>
                <input type="text" className="form-control" onChange={onChange} name="oreLavorate" value={comessa.oreLavorate} />
            </td>
        </tr>
    );
}

export default DayRow;