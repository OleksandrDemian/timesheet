import React from "react";
import DayRow from "./DayRow";
import { Table } from "react-bootstrap";

function DaysTable({ days, updateCheckedDays, checkDay, checkAll }){

    const onCheck = e => {
        let val = e.target.checked;
        checkAll(val);
    };

    return (
        <Table>
            <thead>
                <tr>
                    <td><input type="checkbox" onChange={onCheck} /></td>
                    <td>Giorno</td>
                    <td>Entrata</td>
                    <td>Uscita</td>
                    <td>Ore lavorate</td>
                    <td>Ore straordinari</td>
                </tr>
            </thead>
            <tbody>
                { days.map(day => {
                    return <DayRow key={day.inMonth} day={day} onUpdate={updateCheckedDays} checkDay={checkDay} /> }
                )}
            </tbody>
        </Table>
    );
}

export default DaysTable;