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
                            <option value="0">Gennaio</option>
                            <option value="1">Febbraio</option>
                            <option value="2">Marzo</option>
                            <option value="3">Aprile</option>
                            <option value="4">Maggio</option>
                            <option value="5">Giugno</option>
                            <option value="6">Luglio</option>
                            <option value="7">Agosto</option>
                            <option value="8">Settembre</option>
                            <option value="9">Ottobre</option>
                            <option value="10">Novembre</option>
                            <option value="11">Dicembre</option>
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