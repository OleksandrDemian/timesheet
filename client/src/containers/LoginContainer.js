import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Login from "../components/Login";
import { connect } from "react-redux";
import {loginDone} from "../actions/actions";
import LoadingTemplate from "../components/LoadingTemplate";

function LoginContainer({ logIn, user }) {
    const [ loading, setLoading ] = useState(false);
    const [ failed, setFailed ] = useState(false);

    const fetchUser = (loginData) => {
        setLoading(true);
        setTimeout(() => {
            if(loginData.mail === "ciao@ciaone.it"){
                logIn(loginData);
                setFailed(false);
            } else {
                setFailed(true);
            }
            setLoading(false);
        }, 1000);
    };
    
    if(loading) return <LoadingTemplate />;
    if(user !== null) return <Redirect to="/timesheet"/>;

    return <Login onSubmit={fetchUser} failed={failed} />;
}

const mapStateToProps = state => {
    return {
        user: state.userRepo.user
    }
};

const mapDispatchToProps = dispatch => ({
    logIn: async user => {
        dispatch(loginDone(user));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);