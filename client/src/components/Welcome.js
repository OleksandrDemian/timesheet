import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import { Container, Row, Button } from "react-bootstrap";

function Welcome({user}) {
    return (
        <Container>
            <Row className="justify-content-lg-center">
                Welcome {user.mail}
            </Row>
            <Row className="justify-content-lg-center">
                <Link to="/timesheet">
                    <Button>
                        Go to timesheet
                    </Button>
                </Link>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.userRepo.user
    }
};

export default connect(mapStateToProps)(Welcome);