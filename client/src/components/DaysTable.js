import React from "react";
import DayRow from "./DayRow";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { updateCheckedDays } from "../actions/actions";

function DaysTable({ days, updateCheckedDays }){

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
                    return <DayRow key={day.inMonth} day={day} onUpdate={updateCheckedDays} /> }
                )}
            </tbody>
        </Table>
    );
}

const mapStateToProps = state => {
    return {
        days: state.daysRepo.days
    }
};

const mapDispatchToProps = dispatch => ({
    updateCheckedDays: value => {
        dispatch(updateCheckedDays(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysTable);