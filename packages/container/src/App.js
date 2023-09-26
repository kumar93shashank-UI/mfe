import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const containerGenerateClassName = createGenerateClassName({
  productionPrefix: 'container'
})

const MarketingLazy = lazy(() => import('./components/marketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={containerGenerateClassName}>
          <div>
            <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch >
                <Route path={'/auth'}>
                  <AuthLazy onSignIn={() => setIsSignedIn(true)} /></Route>
                <Route path={'/'}>
                  <MarketingLazy />
                </Route>
              </Switch>
            </Suspense>
            {/* <MarketingApp /> */}
          </div>
        </StylesProvider>
      </BrowserRouter>
    </>

  )
}