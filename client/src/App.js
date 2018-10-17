import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Vendors from "./pages/Vendors";
import Login from "./pages/Login";
import AddCompany from "./pages/AddCompany";
                    
import 'semantic-ui-css/semantic.min.css';
import Wip from "./pages/Wip";
import AddProject from "./pages/AddWip";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Splashpage from "./components/Splashpage";
//import "./App.css"
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1">
            
          </div>
          <div className="col-md-10 main">
            <Switch>
          
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route excat path="/SplashPage" component={Splashpage} />
                <Route exact path="/companies" component={Companies} />
                <Route exact path="/addcompany" component={AddCompany} />

                <Route exact path="/addproject" component={AddProject} />
                <Route exact path="/companies/:id" component={Vendors} />
                <Route excat path="/wip" component={Wip} />
           
            </Switch>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
