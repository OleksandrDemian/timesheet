import React from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";

class Login extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = props.onSubmit;
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            mail: "",
            password: "",
            rememberMe: false
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox'
                ? target.checked
                : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        e.stopPropagation();

        this.onSubmit({
            mail: this.state.mail,
            password: this.state.password,
            rememberMe: this.state.rememberMe
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <h1>
                            Sign in
                        </h1>
                        {this.props.failed && 
                            <Alert variant="danger" dismissible>
                                Wrong credentials
                            </Alert>
                        }
                        <Form onSubmit={this.submitForm}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="mail"
                                    value={this.state.mail}
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;