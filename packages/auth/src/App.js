import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateMarketClassName = createGenerateClassName({
  productionPrefix: 'auth'
})
export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateMarketClassName}>
        <Router history={history}>
          <Switch>
            <Route path={'/auth/signin'}>
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path={'/auth/signup'}>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}