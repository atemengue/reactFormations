/** @format */

import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, scopes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // 1. Redirect to login if not logged in
        if (!auth.authenticated()) return auth.login();

        // 2.Display message if user lacks required scopes(s).
        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1>
              Unauthoried - You need the following scopes(s) to view this page:{' '}
            </h1>
          );
        }

        // 3. Render component
        return <Component auth={auth} {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
