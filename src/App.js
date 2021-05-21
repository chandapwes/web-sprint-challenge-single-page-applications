import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './components/home';
import PizzaForm from './components/pizzaForm';


 const App = () => {
  return (
    <div>
      <Switch>

      <Route exact path = '/'>
        <Home/>
      </Route>

      <Route path = '/pizza'>
        <PizzaForm/>
      </Route>

      </Switch>
    </div>
  );
};
export default App;
