import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function LoadingTemplate() {
    return(
        <Container maxWidth="xs">
            <div className="paper">
                <Typography component="h1" variant="h5">
                    Loading♥
                </Typography>
            </div>
        </Container>
    );
}

export default LoadingTemplate;