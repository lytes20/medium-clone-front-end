import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class SignInPage extends Component {
  responseFacebook = response => {
    console.log(response);
  };

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
        <h1>Welcome to signin Page</h1>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        
      </div>
    );
  }
}

export default SignInPage;
