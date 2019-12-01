import React from "react";
import {Link} from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Row className="justify-content-lg-center">
                Welcome to Timesheet
            </Row>
            <Row className="justify-content-lg-center">
                <Link to="/login">
                    <Button>
                        Login
                    </Button>
                </Link>
            </Row>
        </Container>
    );
}

export default Home;