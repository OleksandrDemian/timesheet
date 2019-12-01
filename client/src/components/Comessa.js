import React from "react";
import { Form, Col } from "react-bootstrap";

class Comessa extends React.Component {

    render(){
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Ora inizio</Form.Label>
                        <Form.Control type="time" placeholder="Ora inizio" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Ora fine</Form.Label>
                        <Form.Control type="time" placeholder="Ora fine" />
                    </Form.Group>
                    <Form.Group as={Col} xl controlId="formGridEmail">
                        <Form.Label>Ore lavorate</Form.Label>
                        <Form.Control type="time" placeholder="Ore lavorate" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Note</Form.Label>
                        <Form.Control type="note" placeholder="Note" />
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }

}

export default Comessa;