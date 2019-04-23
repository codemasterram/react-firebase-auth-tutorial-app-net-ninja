import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
