import React from "react";
import "./Footer.css";



let footerStyle = {
    backgroundColor: "#204879",
    borderTop: "1px solid #E7E7E7",
    color: "white",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    height: "25px",
    paddingBottom: "35px",
}

let phantom = {
  display: 'inline',
  height: '60px',
  width: '100%',
}

function Footer() {
    return <div className="footer" style={footerStyle}>      
           <div className="center"> Project Manager <i className="copyright icon"></i> 2018  
           </div>   
      </div>;
}
export default Footer;