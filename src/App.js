import React from "react";
import Navbar from "./components/Navbar.js";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home.js";
import Products from "./components/pages/Products.js";
import Services from "./components/pages/Services.js";
import SignUp from "./components/pages/SignUp.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/services" exact>
            <Services/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          <Route path="/sign-up" exact>
            <SignUp/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
 
export default App;
