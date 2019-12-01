import React from "react";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Home() {
    return (
        <Container component="main" maxWidth="xs">
            <div className="paper">
                <Typography component="h1" variant="h5">
                    Welcome to Timesheet
                </Typography>
                <Link to="/login">
                    <Button>
                        Login
                    </Button>
                </Link>
            </div>
        </Container>
    );
}

export default Home;