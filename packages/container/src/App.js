import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/marketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
const containerGenerateClassName = createGenerateClassName({
  productionPrefix: 'container'
})
export default () => {

  return (
    <>
      <BrowserRouter>
        <StylesProvider generateClassName={containerGenerateClassName}>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </StylesProvider>
      </BrowserRouter>
    </>

  )
}