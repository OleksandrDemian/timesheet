import React, {useState} from "react";
import Login from "../components/Login";
import { connect } from "react-redux";
import {loginDone} from "../actions/actions";
import LoadingTemplate from "../components/LoadingTemplate";
import Welcome from "../components/Welcome";

function LoginContainer({ logIn, user }) {
    const [ loading, setLoading ] = useState(false);
    const fetchUser = (loginData) => {
        setLoading(true);
        setTimeout(() => {
            if(loginData.mail === "ciao"){
                logIn(loginData);
            }
            setLoading(false);
        }, 1000);
    };
    if(loading) return <LoadingTemplate />;
    if(user !== null) return <Welcome/>;

    return <Login onSubmit={fetchUser} />;
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
// export default LoginContainer;