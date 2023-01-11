import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

export function  IsUserBrowserRouter({ user, loggedInPath, children, ...rest}) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    //console.log('user', user);
                    return children;
                }

                if (user) {
                    return (
                        <BrowserRouter to={{
                            pathname: loggedInPath,
                        }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={({ location }) => {
                if(user) {
                    return children;
                }

                if(!user) {
                    return (
                        <BrowserRouter to={{
                            pathname: 'signin',
                            state: { from: location },
                        }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}