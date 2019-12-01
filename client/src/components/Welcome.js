import React from "react";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function Welcome({user}) {
    return (
        <Container maxWidth="xs">
            <div className="paper">
                <Typography component="h1" variant="h5">
                    Welcome {user.mail}
                </Typography>
                <Link to="/timesheet">
                    <Button>
                        Go to timesheet
                    </Button>
                </Link>
            </div>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        user: state.userRepo.user
    }
};

export default connect(mapStateToProps)(Welcome);