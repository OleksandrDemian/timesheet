import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { handleFormInput } from "../utils/TemplateUtils";

function MonthChooser({ confirmDate, _month, _year }){
    const [year, setYear] = useState(_year);
    const [month, setMonth] = useState(_month);
    const onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        confirmDate({ year, month });
    };

    return (
        <Row>
            <Col lg={{ span: 4, offset: 4 }}>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Anno</Form.Label>
                        <Form.Control type="text" placeholder="Inserisci anno" value={year} onChange={handleFormInput(setYear)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Mese</Form.Label>
                        <Form.Control as="select" value={month} onChange={handleFormInput(setMonth)}>
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="4">5</option>
                            <option value="5">6</option>
                            <option value="6">7</option>
                            <option value="7">8</option>
                            <option value="8">9</option>
                            <option value="9">10</option>
                            <option value="10">11</option>
                            <option value="11">12</option>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary">
                        Conferma
                    </Button>
                </Form>
            </Col>
        </Row>
        
    )
}

export default MonthChooser;