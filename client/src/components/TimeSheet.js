import React, { useState } from "react";
import {getDays} from "../utils/Days";
import DaysTableContainer from "../containers/DaysTableContainer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setDays } from "../actions/actions";
import TimeSheetHeader from "./TimeSheetHeader";

export const TIME_SHEET_MODE = "TIME_SHEET_MODE";
export const CONFIRM_SHEET_MODE = "CONFIRM_SHEET_MODE";
export const CAHNGE_MONTH_MODE = "CAHNGE_MONTH_MODE";

function TimeSheet({ month, year, setDays }) {
    const days = getDays(month, year);
    setDays(days);

    const [mode, setMode] = useState(TIME_SHEET_MODE);

    const onSave = () => {
        alert("Il salvataggio non è ancora implementato");
    }

    const onChangeMonth = ()  => {
        setMode(CAHNGE_MONTH_MODE);
    }

    const onConfirmMonth = () => {
        setMode(CONFIRM_SHEET_MODE);
    }

    const onBack = () => {
        setMode(TIME_SHEET_MODE);
    }

    return (
        <Container>
            <Row>
                <Col lg="12">
                    <TimeSheetHeader month={month} year={year} />
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <Button variant="primary" className="m-2" onClick={onSave}>Salva mese</Button>
                    <Button variant="primary" className="m-2" onClick={onChangeMonth}>Cambia mese</Button>
                    <Button variant="primary" className="m-2" onClick={onConfirmMonth}>Conferma mese</Button>
                    { mode !== TIME_SHEET_MODE && <Button variant="primary" className="m-2" onClick={onBack}>Indietro</Button> }
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    { mode === TIME_SHEET_MODE && <DaysTableContainer /> }
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => ({
    month: state.appRepo.month,
    year: state.appRepo.year
});

const mapDispatchToProps = dispatch => ({
    setDays: days => {
        dispatch(setDays(days));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSheet);