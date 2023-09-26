import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const containerGenerateClassName = createGenerateClassName({
  productionPrefix: 'container'
})

const MarketingLazy = lazy(() => import('./components/marketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {

  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={containerGenerateClassName}>
          <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch >
                <Route path={'/auth'} component={AuthLazy} />
                <Route path={'/'} component={MarketingLazy} />
              </Switch>
            </Suspense>
            {/* <MarketingApp /> */}
          </div>
        </StylesProvider>
      </BrowserRouter>
    </>

  )
}