import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
            <Container component="main" maxWidth="xs">
                <div className="paper">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className="form" onSubmit={this.submitForm}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="mail"
                            autoComplete="email"
                            autoFocus
                            value={this.state.mail}
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <FormControlLabel
                            control={<Checkbox
                                value={this.state.rememberMe}
                                color="primary"
                                name="rememberMe"
                                onChange={this.handleInputChange}
                            />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default Login;