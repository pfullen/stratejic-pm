import React from "react";
import "./Header.css";
import Logo from "./BBlogo.png";


const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header col-md-12">
        <a href="/" className="navbar-brand">
          
          <h1 className="my-logo">   Stratéjic, LLC   </h1>

        </a>
        
        <p className="navbar-text2 navbar-left tag-line" >Project Manager</p>
        
          <span className="glyphicon glyphicon-cog " id ="gear" />
        
      </div>
    </div>
  </nav>
);

   export default Header;