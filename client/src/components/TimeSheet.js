import React from "react";
import {getCurrentMonthDays} from "../utils/Days";
import DaysTableContainer from "../containers/DaysTableContainer";
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
                    <DaysTableContainer />
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