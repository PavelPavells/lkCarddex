import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, auth0, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true || auth0.isAuth0 === true ? (  //Change on TRUE!
        <Component {...props} />
      ) : (
       <Redirect to="/" />
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  auth0: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  auth0: state.auth0
});
export default connect(mapStateToProps)(PrivateRoute);