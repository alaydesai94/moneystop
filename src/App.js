import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Cashing from './pages/cashing';
import Collection from './pages/collection';
import Pickup from './pages/pickup';
import NewCustomer from './pages/newcustomer';
import SearchName from './components/Navbar/SearchName.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cashing' component={Cashing} />
        <Route path='/collection' component={Collection} />
        <Route path='/pickup' component={Pickup} />
        <Route path='/newcustomer' component={NewCustomer} />
      </Switch>
    </Router>

  );
}

export default App;
