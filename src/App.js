import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidePanel from './Components/SidePanel/SidePanel'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Users from './Components/Users/Users';
import Routes from './Components/Routes/Routes';
import Product from './Components/Product/Product';


function App() {
  return (
    <div >
     

      <Router>
      <SidePanel></SidePanel>
        <Switch>
          <Route path="/users">
            <Users></Users>
          </Route>

          <Route path="/routes">
            <Routes></Routes>
          </Route>

          <Route path="/products">
              <Product></Product>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
