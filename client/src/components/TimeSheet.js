import React from "react";
import {getCurrentMonthDays} from "../utils/Days";
import DaysTable from "./DaysTable";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { setDays } from "../actions/actions";

function TimeSheet({ days, setDays }) {
    days = getCurrentMonthDays();
    setDays(days);

    return (
        <Container>
            <Row>
                <Col lg="12">
                    <DaysTable />
                </Col>
            </Row>
        </Container>
    );
}

const mapDispatchToProps = dispatch => ({
    setDays: days => {
        dispatch(setDays(days));
    }
});

export default connect(null, mapDispatchToProps)(TimeSheet);