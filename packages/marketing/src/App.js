import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateMarketClassName = createGenerateClassName({
  productionPrefix: 'market'
})
export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateMarketClassName}>
        <BrowserRouter>
          <Switch>
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}