import React from "react"
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ component: Component, location, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }

  return (
    <Route {...rest}
      render={props => (
        (user && user.token) ?
          <Component {...props} user={user} />
          :
          <Redirect to={{ pathname: "/signin", state: location }} />
      )}
    />
  )
}

export default ProtectedRoute;