import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';


const ProtectedRoute = (props) => {
  const { user } = useContext(AuthContext);

    const { component: Component, ...rest } = props;
    return (
        (user && user.token) ?
            <Route {...rest} component={Component} /> :
            <Redirect to="/signin" />
    )
}

export default ProtectedRoute;