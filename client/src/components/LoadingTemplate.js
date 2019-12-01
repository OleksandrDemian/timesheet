import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";

function LoadingTemplate() {
    return(
        <Container>
            <Row className="justify-content-lg-center">
                <h1>Loading</h1>
            </Row>
            <Row className="justify-content-lg-center">
                <Spinner animation="grow" variant="primary" />
            </Row>
        </Container>
    );
}

export default LoadingTemplate;