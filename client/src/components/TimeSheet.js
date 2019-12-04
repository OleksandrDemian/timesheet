import React from "react";
import {getDays} from "../utils/Days";
import DaysTableContainer from "../containers/DaysTableContainer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setDays } from "../actions/actions";
import TimeSheetHeader from "./TimeSheetHeader";
import {Link} from "react-router-dom";

export const TIME_SHEET_MODE = "TIME_SHEET_MODE";
export const CONFIRM_SHEET_MODE = "CONFIRM_SHEET_MODE";
export const CAHNGE_MONTH_MODE = "CAHNGE_MONTH_MODE";

function TimeSheet({ month, year, setDays }) {
    const days = getDays(month, year);
    setDays(days);

    const onSave = () => {
        alert("Il salvataggio non è ancora implementato");
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
                    <Link to="/month">
                        <Button variant="primary" className="m-2">Cambia mese</Button>
                    </Link>
                    <Link to="/confirm">
                        <Button variant="primary" className="m-2">Conferma mese</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <DaysTableContainer />
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