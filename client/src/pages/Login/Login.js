import React, { Component } from "react";
import ReactSignupLoginComponent from 'react-signup-login-component';
 
const Login = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert('Login callback, see log on the console to see the data.');
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
        <div>
            <ReactSignupLoginComponent
            title="Login"
            recoverPasswordCustomLabel="Submit"
            signupCustomLabel=''
  styles={{
    mainWrapper: { backgroundColor: '#204879' },
    mainTitle: { color: 'white' },
    flipper: { transition: '0.1s' },
    
    login: {
      wrapper: { backgroundColor: '' },
      inputWrapper: { backgroundColor: 'AliceBlue' },
      buttonsWrapper: { backgroundColor: 'gray' },
      input: { backgroundColor: '' },
      
      button: { backgroundColor: '' },
    }
  }}
  Login
  // Spread the default props. It's here to illustrate the example
/>
        </div>
    );
};
 
export default Login;



/*
class Login extends Component{



	render(){

		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="inputEmail">Email address</label>
						<input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword">Password</label>
						<input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
				</div>
				<button type="submit" className="btn btn-default">Login</button>
			</form>
			);
	}
}

export default Login;
*/