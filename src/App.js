// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ItemsPage from './pages/ItemsPage';
import InvoicesPage from './pages/InvoicesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/items" component={ItemsPage} />
          <Route path="/invoices" component={InvoicesPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
