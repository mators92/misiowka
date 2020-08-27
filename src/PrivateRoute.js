import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginService from './LoginService';

function PrivateRoute({ component: Component }) {
    const isAuthenticated = LoginService.checkIfUserIsLogged();

    return (
        <Route
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default PrivateRoute;