import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserBrowserRouter, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks/index';


export default function App() {
  const {user} = useAuthListener();
  console.log(user);
  
  return ( 
    <Router>
      <Route>
        <IsUserBrowserRouter user={user} loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_IN}
          >
        <Signin />
        </IsUserBrowserRouter>

        <IsUserBrowserRouter user={user} loggedInPath={ROUTES.BROWSE} 
            path={ROUTES.SIGN_UP}
            >
          <Signup />
          </IsUserBrowserRouter>
        
        <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse />
        </ProtectedRoute>

        <IsUserBrowserRouter user={user} loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.HOME} exact>
          <Home />
        </IsUserBrowserRouter>
      </Route>

    </Router>
  );
}
