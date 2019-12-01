import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import LoginContainer from "../containers/LoginContainer";
import TimeSheet from "./TimeSheet";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/timesheet">
                    <TimeSheet />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;