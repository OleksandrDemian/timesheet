import React from "react";
import DayRow from "./DayRow";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { updateCheckedDays, checkDay } from "../actions/actions";

function DaysTable({ days, updateCheckedDays, checkDay }){

    return (
        <Table>
            <thead>
                <tr>
                    <td>Seleziona</td>
                    <td>Giorno</td>
                    <td>Entrata</td>
                    <td>Uscita</td>
                    <td>Ore lavorate</td>
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

const mapStateToProps = state => {
    return {
        days: state.daysRepo
    }
};

const mapDispatchToProps = dispatch => ({
    updateCheckedDays: value => {
        dispatch(updateCheckedDays(value));
    },
    checkDay: (inMonth, action) => {
        dispatch(checkDay(inMonth, action));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysTable);